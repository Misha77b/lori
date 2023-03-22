import axios from "axios";
import productsReducer, { fetchProducts, removeProduct, setParams } from "../productsSlice";

const initialState = {
	data: [],
	params: "",
	dataQuantity: 0,
	loader: false,
};

const mockProduct = [
	{
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
	},
];

jest.mock("axios");

describe("searchSlice", () => {
	it("should productsSlice with resolved response", async () => {
		axios.get.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockProduct),
		});
		const dispatch = jest.fn();
		const thunk = fetchProducts();

		await thunk(dispatch, () => ({}));

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(fetchProducts.pending().type);
		expect(end[0].type).toBe(fetchProducts.fulfilled().type);
	});

	it("should return default state when passed an empty actions", () => {
		const result = productsReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it("should add new goods to products 'removeProduct' action", () => {
		const action = { type: removeProduct.type, payload: mockProduct.id };
		const result = productsReducer(initialState, action);
		expect(result.data.filter.id).toEqual(mockProduct.id);
		expect(result.data).toEqual([]);
	});

	// it("should add new goods to search 'actionSetSearchProduct' action", () => {
	// 	const action = { type: actionSetSearchProduct.type, payload: mockProduct };
	// 	const result = productsReducer(initialState, action);

	// 	expect(result.searchProducts).toEqual([mockProduct]);
	// });

	// it('should change status with "fetchSearchProducts.pending" action', () => {
	// 	const state = productsReducer(initialState, fetchSearchProducts.pending());

	// 	expect(state.loader).toBe(true);
	// });

	// it('should fetch goods with "fetchSearchProducts.fulfilled" action', () => {
	// 	const state = productsReducer(initialState, fetchSearchProducts.fulfilled(mockProduct));

	// 	expect(state.loader).toEqual(false);
	// 	expect(state.searchProducts).toEqual(mockProduct);
	// });

	// it('should fetch goods with "fetchSearchProducts.rejected" action', () => {
	// 	const action = {
	// 		type: fetchSearchProducts.rejected.type,
	// 		payload: "Server Error !",
	// 	};

	// 	const state = productsReducer(initialState, action);

	// 	expect(state.loader).toEqual(false);
	// 	expect(state.searchProducts).toEqual([]);
	// 	expect(state.Error).toEqual("Server Error !");
	// });
});
