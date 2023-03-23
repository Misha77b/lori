import favoriteReducer, { setFavorite, removeItemFavorite } from "../favoriteSlice";

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

describe("favoriteSlice", () => {
	it("should return default state when passed an empty actions", () => {
		const initialState = {
			favorite: JSON.parse(localStorage.getItem("favorites")) || [],
		};
		const result = favoriteReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it("should add new goods to favorites 'setFavorite' action", () => {
		const initialState = {
			favorite: JSON.parse(localStorage.getItem("favorites")) || [],
		};
		const action = { type: setFavorite.type, payload: mockProduct };
		const result = favoriteReducer(initialState, action);

		expect(result.favorite).toEqual([mockProduct]);
	});

	it("should remove goods to favorites by id 'removeItemFavorite' action", () => {
		const initialState = {
			favorite: JSON.parse(localStorage.getItem("favorites")) || [mockProduct],
		};
		const action = { type: removeItemFavorite.type, payload: mockProduct };
		const result = favoriteReducer(initialState, action);
		expect(result.favorite).toEqual([mockProduct]);
	});

	it("should remove item from favorites", () => {
		const initialState = {
			favorite: JSON.parse(localStorage.getItem("favorites")) || [mockProduct],
		};
		const action = { type: removeItemFavorite.type, payload: mockProduct };
		const expectedState = {
			favorite: [mockProduct],
		};
		expect(favoriteReducer(initialState, action)).toEqual(expectedState);
	});
});
