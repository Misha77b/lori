import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	orderData: "",
	orderProducts: [],
};

export const createOrder = createAsyncThunk("orders/postData", async (obj) => {
	const response = await axios
		.post(`${DOMAIN}/orders`, obj)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			// eslint-disable-next-line
			alert("Заповніть обов'язкові поля");
			console.warn(err);
		});
	return response;
});

export const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		setOrderData: (state, action) => {
			state.orderData = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createOrder.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.slidesData = action.payload;
			state.loader = false;
		});
	},
});

export const { setOrderData } = ordersSlice.actions;
export default ordersSlice.reducer;
