import axios from "axios";
import { fetchSearchProducts } from "../searchSlice";
import { DOMAIN } from "../../../config/API";

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

		const dispatch = jest.fn();
		const thunk = fetchSearchProducts();
	});
});
