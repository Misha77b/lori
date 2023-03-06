import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = { customer: {} };

export const fetchCustomer = createAsyncThunk("customer/fetchCustomer", async () => {
	axios
		.get(`${DOMAIN}/customers/customer`, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
		.then((loggedInCustomer) => loggedInCustomer.data)
		.catch((err) => console.warn(err));
});

export const customerSlice = createSlice({
	name: "customer",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchCustomer.fulfilled, (state, action) => {
			state.customer = action.payload;
		});
	},
});

export default customerSlice.reducer;
