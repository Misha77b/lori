import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	searchQuery: "",
	searchProducts: [],
	loader: false,
};
export const fetchSearchProducts = createAsyncThunk("products/search", async (searchPhrases) => {
	const response = await axios.post(`${DOMAIN}/products/search`, searchPhrases);
	return response.data;
});
export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		actionSetSearchProduct: (state, action) => {
			state.searchProducts.push(action.payload);
		},
		actionSetSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSearchProducts.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
			state.searchProducts = action.payload;
			state.searchQuery = action.payload;
			state.loader = false;
		});
		builder.addCase(fetchSearchProducts.rejected, (state, action) => {
			state.loader = false;
			state.Error = action.payload;
		});
	},
});
export const { actionSearchProduct, actionSetSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
