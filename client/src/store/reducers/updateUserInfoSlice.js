import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";
import setAuthToken from "../../config/setAuthToken";

const token = localStorage.getItem("token");
setAuthToken(token);
const initialState = { message: false };
export const fetchUpdateCustomerInfo = createAsyncThunk(
	"customerInfo/fetchUpdateCustomerInfo",
	async (updatedCustomer) => {
		return axios.put(`${DOMAIN}/customers`, updatedCustomer);
	},
);
export const updateCustomerInfoSlice = createSlice({
	name: "updateCustomerInfo",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUpdateCustomerInfo.fulfilled, (state, action) => {
			state.message = true;
		});
	},
});

export default updateCustomerInfoSlice.reducer;
