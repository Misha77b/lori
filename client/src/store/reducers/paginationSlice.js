import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DOMAIN } from "../../config/API";
import sendRequest from "../../helpers/sendRequest";

const initialState = {
	paginatedData: null,
	loader: true,
};

export const fetchPaginatedData = createAsyncThunk("paginatedData/fetchPagination", async () => {
	const response = sendRequest(`${DOMAIN}/products/filter`).then((data) => data);
	// const response = sendRequest(`${DOMAIN}/products/filter?perPage=5&startPage=1`);
	return response;
});

export const paginationSlice = createSlice({
	name: "paginatedData",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchPaginatedData.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(fetchPaginatedData.fulfilled, (state, action) => {
			state.paginatedData = action.payload;
			state.loader = false;
		});
	},
});

export default paginationSlice.reducer;
