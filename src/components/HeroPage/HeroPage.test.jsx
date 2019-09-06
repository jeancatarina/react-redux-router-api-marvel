import { mount } from "enzyme";
import React from "react";
import HeroPage from "./HeroPage";
import { MemoryRouter } from "react-router";
import { expect } from "chai";

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

describe("HeroPage tests", () => {
	let wrapper, instance;

	const mountWrapper = extraProps =>
		mount(
			<MemoryRouter>
				<HeroPage
					match={{ params: { id: 1 } }}
					loading={false}
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

		it("should render HeroPage", () => {
			expect(wrapper.find(HeroPage)).to.have.length(1);
		});
	});
});
