import axios from "axios";
import { fetchSearchProducts } from "../searchSlice";
import { DOMAIN } from "../../../config/API";

const initialState = {
	searchProducts: [],
	loader: false,
};

jest.mock("axios");

describe("searchSlice", () => {
	it("should fetchSearchProducts with resolved response", async () => {
		const mockProduct = [
			{
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

		axios.post.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockProduct),
		});

		const dispatch = jest.fn();
		const thunk = fetchSearchProducts();

		await thunk(dispatch, () => {});
		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);

		const [start, end] = calls;

		expect(start[0].type).toBe(fetchSearchProducts.pending().type);
		expect(end[0].type).toBe(fetchSearchProducts.fulfilled().type);
	});

	it("should return default state when passed an empty actions", () => {
		const result = favoriteReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});
});
