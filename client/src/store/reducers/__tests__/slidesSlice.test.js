import slidesReducer, { fetchSlides } from "../slidesSlice";

const initialState = {
	slidesData: [],
	loader: true,
};

global.fetch = jest.fn();

const mockProduct = {
	id: "22222",
	name: "Apple iPhone 13 128gb",
	brand: "Apple",
	imageUrls: [
		"https://res.cloudinary.com/dsx708og4/image/upload/v1676278622/Lori_pro…",
		"https://res.cloudinary.com/dsx708og4/image/upload/v1676278622/Lori_pro…",
		"https://res.cloudinary.com/dsx708og4/image/upload/v1676278627/Lori_pro…",
		"https://res.cloudinary.com/dsx708og4/image/upload/v1676278632/Lori_pro…",
	],
	currentPrice: 56999,
	popular: false,
};

describe("fetchSlides", () => {
	it("shoud fetchSlides with resolved response", async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockProduct),
		});
		const dispatch = jest.fn();
		const thunk = fetchSlides();

		await thunk(dispatch, () => ({}));

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(fetchSlides.pending().type);
		expect(end[0].type).toBe(fetchSlides.fulfilled().type);
		expect(end[0].payload).toBe(mockProduct);
	});
	it("should change status with 'fetchSlides.pending' action", () => {
		const state = slidesReducer(initialState, fetchSlides.pending());

		expect(state.loader).toBe(true);
	});

	it("should fetch goods with 'fetchSlides.fulfilled' action", () => {
		const state = slidesReducer(initialState, fetchSlides.fulfilled(mockProduct));

		expect(state.loader).toEqual(false);
		expect(state.slidesData).toEqual(mockProduct);
	});
});
