import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	shoppingCart: JSON.parse(localStorage.getItem("cart") || "[]"),
	productsQuantity: null,
	totalCartSum: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addShoppingCart: (state, action) => {
			state.shoppingCart = [...new Set([...state.shoppingCart, action.payload])];
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
		removeItemShoppingCart: (state, action) => {
			state.shoppingCart = state.shoppingCart.filter((itemNo) => itemNo !== action.payload);
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
		setProductsQuantity: (state, action) => {
			state.productsQuantity = action.payload;
			console.log("state.productsQuantity", state.productsQuantity);
		},
		setTotalCartSum: (state, action) => {
			state.totalCartSum = action.payload;
		},
	},
});

export const fetchCart = createAsyncThunk("cart/fetchData", async (newCart) => {
	const response = await axios.post(`${DOMAIN}/cart`, newCart);
	return response;
});
export const { removeItemShoppingCart, addShoppingCart, setProductsQuantity, setTotalCartSum } =
	cartSlice.actions;
export default cartSlice.reducer;
