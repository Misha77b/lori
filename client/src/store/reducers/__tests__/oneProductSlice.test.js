import oneProductsReducer, {
	actionFetchProduct,
	actionPage,
	actionLoading,
} from "../oneProductSlice";

const initialState = {
	pageObj: {},
	loading: false,
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

describe("oneProductSlice", () => {
	it("shoud actionFetchProduct with resolved response", async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockProduct),
		});
		const dispatch = jest.fn();
		const thunk = actionFetchProduct();

		await thunk(dispatch, () => ({}));

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(3);

		const [start, end] = calls;
		expect(end[0].payload).toBe(mockProduct);
	});

	it("should return default state when passed an empty actions", () => {
		const result = oneProductsReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it("should add new goods to search 'actionPage' action", () => {
		const action = { type: actionPage.type, payload: mockProduct };
		const result = oneProductsReducer(initialState, action);

		expect(result.pageObj).toEqual(mockProduct);
	});

	it("should add new goods to search 'actionLoading' action", () => {
		const action = { type: actionLoading.type, payload: false };
		const result = oneProductsReducer(initialState, action);

		expect(result.loading).toEqual(false);
	});
});
