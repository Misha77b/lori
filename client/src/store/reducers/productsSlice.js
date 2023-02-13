// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN } from "../../config/API";
import sendRequest from "../../helpers/sendRequest";

const initialState = {
	data: [],
	shoppingCart: [],
	favorite: [],
	loader: true,
};

export const fetchProducts = createAsyncThunk("products/fetchData", async () => {
	const response = sendRequest(`${DOMAIN}/products`);
	return response;
});

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setShoppingCart: (state, action) => {
			state.shoppingCart.push(action.payload);
		},
		setFavorite: (state, action) => {
			state.favorite.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload);
		},
		removeItemShoppingCart: (state, action) => {
			state.shoppingCart = state.shoppingCart.filter((item) => item.id !== action.payload);
		},
		removeItemFavorite: (state, action) => {
			state.favorite = state.favorite.filter((item) => item.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loader = false;
		});
	},
});

export const {
	setShoppingCart,
	setFavorite,
	removeItemShoppingCart,
	removeItemFavorite,
	removeProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
