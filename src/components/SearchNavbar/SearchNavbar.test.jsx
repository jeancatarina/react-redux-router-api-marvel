import { expect } from "chai";
import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import sinon from "sinon";
import SearchNavbar from "./SearchNavbar";

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

describe("SearchNavbar tests", () => {
	let wrapper,
		instance,
		spy = { fetchData: sinon.spy() };

	const mountWrapper = extraProps =>
		mount(
			<MemoryRouter>
				<SearchNavbar
					loading={false}
					heroes={heroesMock}
					fetchData={spy.fetchData}
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

		it("should render SearchNavbar", () => {
			expect(wrapper.find(SearchNavbar)).to.have.length(1);
		});

		shouldRenderComponent("NavbarBrand");
		shouldRenderComponent("NavLink");
		shouldRenderComponent("FormControl");
	});

	describe("data matching", () => {
		beforeAll(() => {
			initialize();
		});

		afterAll(() => {
			unmountWrapper();
		});

		const shouldMatchTextWithMock = (componentName, text) => {
			it(`should ${componentName} match with text`, () => {
				expect(wrapper.find(componentName).text()).to.be.equal(text);
			});
		};

		shouldMatchTextWithMock("NavbarBrand", "Marvel Heroes");
		shouldMatchTextWithMock("NavLink", "Home");
	});

	describe("behavior tests", () => {
		beforeAll(() => {
			initialize();
		});

		afterAll(() => {
			unmountWrapper();
		});

		it("should call fetchData", () => {
			const input = wrapper.find("input"),
				btn = wrapper.find("Button");

			input.simulate("change", {
				target: {
					value: "iron man"
				}
			});
			btn.simulate("click");
			wrapper.update();
			expect(spy.fetchData.called).to.be.true;
		});
	});
});
