// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";
import sendRequest from "../../helpers/sendRequest";

import { getItems } from "../../helpers/getItems";

const initialState = {
	data: [],
	popularProducts: [],
	saleProducts: [],
	dataQuantity: 0,
	favorite: JSON.parse(localStorage.getItem("favorites") || "[]"),
	loader: false,
};

export const fetchProducts = createAsyncThunk("products/fetchData", async (filters = "") => {
	let url = `${DOMAIN}/products`;
	if (filters) {
		url = `${url}/filter?${filters}`;
	}
	const response = await axios.get(url).then(({ data }) => data);
	return response;
});

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setFavorite: (state, action) => {
			debugger; // eslint-disable-line no-debugger
			state.favorite = [...new Set([...state.favorite, action.payload])];
			localStorage.setItem("favorites", JSON.stringify(state.favorite));
		},
		removeProduct: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload);
		},
		removeItemFavorite: (state, action) => {
			state.favorite = state.favorite.filter((item) => item.itemNo !== action.payload);
			localStorage.setItem("favorites", JSON.stringify(state.favorite));
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			if (action.payload.products) {
				state.data = action.payload.products;
				state.dataQuantity = action.payload.productsQuantity;
			} else {
				state.data = action.payload;
			}
			state.loader = false;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loader = false;
			state.Error = action.payload;
		});
	},
});
export const { setFavorite, removeItemFavorite } = productsSlice.actions;

export default productsSlice.reducer;
