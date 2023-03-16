import { selectFavorite } from "../favorite.selectors";

describe("should select favorite from state", () => {
	const favorite = [{ name: "TouYinger M4 FullHD", price: 3700, article: 12345, brand: "Apple" }];

	const result = selectFavorite({ favorite });

	expect(result).toEqual(favorite);
});
