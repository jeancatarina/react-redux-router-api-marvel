import { mount } from "enzyme";
import React from "react";
import SearchNavbar from "./SearchNavbar";
import { MemoryRouter } from "react-router";
import { expect } from 'chai';

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
	let wrapper, instance;

	const mountWrapper = extraProps =>
		mount(
			<MemoryRouter>
				<SearchNavbar
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

		it("should render SearchNavbar", () => {
			expect(wrapper.find(SearchNavbar)).to.have.length(1);
		});
	});

	describe("behavior tests", () => {
		beforeAll(() => {
			initialize();
		});

		afterAll(() => {
			unmountWrapper();
		});

		it("should do something when something happens", () => {
			//
		});
	});
});
