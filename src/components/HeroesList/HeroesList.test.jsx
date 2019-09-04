import { mount } from "enzyme";
import React from "react";
import HeroesList from "./HeroesList";
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

describe("HeroesList tests", () => {
	let wrapper, instance;

	const mountWrapper = extraProps =>
		mount(
			<MemoryRouter>
				<HeroesList
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

		it("should render HeroesList", () => {
			expect(wrapper.find(HeroesList)).to.have.length(1);
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
