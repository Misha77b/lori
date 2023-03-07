import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = { message: false };

export const fetchUpdatePassword = createAsyncThunk(
	"customerInfo/fetchUpdatePassword",
	async (passwords) => {
		return axios.put(`${DOMAIN}/customers/password`, passwords);
	},
);
export const updateCustomerPasswordSlice = createSlice({
	name: "updateCustomerPassword",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUpdatePassword.fulfilled, (state, action) => {
			state.message = true;
		});
	},
});

export default updateCustomerPasswordSlice.reducer;
