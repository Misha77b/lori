import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	orderData: "",
	orderProducts: [],
	shippingMethod: "",
	deliveryAdress: "",
	paymentMethod: "",
	// customerId: "",
	// orderNumber: "",
};

export const createOrder = createAsyncThunk("orders/postData", async (data) => {
	axios
		.post(`${DOMAIN}/orders`, data)
		.then((ordersData) => ordersData)
		.catch((err) => console.warn(err));
	return response;
});

export const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		setOrderData: (state, action) => {
			state.orderData = action.payload;
		},
		setShippingMethod: (state, action) => {
			state.shippingMethod = action.payload;
		},
		setDeliveryAdress: (state, action) => {
			state.deliveryAdress = action.payload;
		},
		setPaymentMethod: (state, action) => {
			state.paymentMethod = action.payload;
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

export const { setOrderData, setShippingMethod, setDeliveryAdress, setPaymentMethod } =
	ordersSlice.actions;
export default ordersSlice.reducer;
