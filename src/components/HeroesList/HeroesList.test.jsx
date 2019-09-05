import { expect } from "chai";
import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import sinon from "sinon";
import HeroesList from "./HeroesList";

const heroesMock = [
	{
		id: 1,
		name: "Spider-Man",
		description: "nice-guy",
		thumbnail: "spiderman.jpeg",
		series: {
			items: [
				{
					name: "Spider man the movie"
				}
			]
		}
	}
];

describe("HeroesList tests", () => {
	let wrapper,
		instance,
		spy = { enzymeTestRoute: sinon.spy(), fetchData: sinon.spy() };

	const mountWrapper = extraProps =>
		mount(
			<MemoryRouter>
				<HeroesList
					loading={false}
					fetchData={spy.fetchData}
					heroes={heroesMock}
					{...extraProps}
				/>
			</MemoryRouter>
		);

	const unmountWrapper = () => wrapper && wrapper.length && wrapper.unmount();

	const initialize = extraProps => {
		unmountWrapper();

		wrapper = mountWrapper(extraProps);
		instance = wrapper.instance();
	};

	describe("rendering tests", () => {
		beforeAll(() => {
			initialize();
		});

		afterAll(() => {
			unmountWrapper();
		});

		const shouldRenderComponent = componentName => {
			it(`should render ${componentName}`, () => {
				expect(wrapper.find(componentName)).to.have.length(1);
			});
		};

		it(`should render HeroesList`, () => {
			expect(wrapper.find(HeroesList)).to.have.length(1);
		});

		shouldRenderComponent("CardImg");
		shouldRenderComponent("CardTitle");
		shouldRenderComponent("CardText");
		shouldRenderComponent("Button");
	});

	describe("data matching", () => {
		beforeAll(() => {
			initialize();
		});

		afterAll(() => {
			unmountWrapper();
		});

		const shouldMatchTextWithMock = (componentName, mockProp) => {
			it(`should ${componentName} match with heroesMock`, () => {
				expect(wrapper.find(componentName).text()).to.be.equal(
					heroesMock[0][mockProp]
				);
			});
		};

		shouldMatchTextWithMock("CardTitle", "name");

		shouldMatchTextWithMock("CardText", "description");

		it("should Button match with heroesMock", () => {
			expect(wrapper.find("Button").text()).to.be.equal("Mais Detalhes");
		});
	});

	describe("behavior tests", () => {
		beforeAll(() => {
			initialize({
				enzymeTestRoute: spy.enzymeTestRoute("hero/1")
			});
		});

		afterAll(() => {
			unmountWrapper();
		});

		it("should call route spy with args", () => {
			const btn = wrapper.find("Button");

			btn.simulate("click");
			wrapper.update();
			expect(spy.enzymeTestRoute.args).to.deep.equal([["hero/1"]]);
		});
	});
});
