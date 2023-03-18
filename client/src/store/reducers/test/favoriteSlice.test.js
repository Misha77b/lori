import favoriteReducer, { setFavorite, removeItemFavorite } from "../favoriteSlice";

const initialState = {
	favorite: JSON.parse(localStorage.getItem("favorites")) || [],
};

const mockCard = {
	name: "TouYinger M4 FullHD",
	price: 3700,
	article: 12345,
	brand: "Apple",
};

describe("favoriteSlice", () => {
	it("should return default state when passed an empty actions", () => {
		const result = favoriteReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it("should add new goods to favorites 'setFavorite' action", () => {
		const action = { type: setFavorite.type, payload: mockCard };
		const result = favoriteReducer(initialState, action);

		expect(result.favorite).toEqual([mockCard]);
	});

	it("should remove goods to favorites by id 'actionAddIsFavorite' action", () => {
		const action = { type: removeItemFavorite.type, payload: mockCard.article };
		const result = favoriteReducer(initialState, action);
		expect(result.favorite.article).not.toEqual(mockCard.article);
		expect(result.favorite).toEqual([]);
	});
});
