import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";
import { object } from "prop-types";
import { DOMAIN } from "../../config/API";
import setAuthToken from "../../config/setAuthToken";

const initialState = {
	shoppingCart: JSON.parse(localStorage.getItem("cart") || "{}"),
	totalCartQuantity: 0,
	// totalCartSum: 0,
	totalCartSum: JSON.parse(localStorage.getItem("totalCartSum") || 0),
};

Object.keys(initialState.shoppingCart).forEach((key) => {
	initialState.totalCartQuantity += initialState.shoppingCart[key];
});

const token = localStorage.getItem("token");
setAuthToken(token);
export const createCartAuth = createAsyncThunk("cart/createCartAuth", async (id) => {
	const response = await axios.put(`${DOMAIN}/cart/${id}`);
	return response.data;
});
export const deleteCartAuth = createAsyncThunk("cart/deleteCartAuth", async () => {
	const response = await axios.delete(`${DOMAIN}/cart`);
	return response.data;
});
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addShoppingCart: (state, action) => {
			if (!state.shoppingCart[action.payload]) {
				state.shoppingCart = { ...state.shoppingCart, [action.payload]: 1 };
				state.totalCartQuantity = 0;
				Object.keys(state.shoppingCart).forEach((key) => {
					state.totalCartQuantity += state.shoppingCart[key];
				});
			}
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
		removeItemShoppingCart: (state, action) => {
			if (state.shoppingCart[action.payload]) {
				console.log("action.payload", action.payload);
				// for auth delete 1 product
				if (localStorage.getItem("token")) {
					axios.delete(`${DOMAIN}/cart/product/${action.payload}`);
				}
				//
				delete state.shoppingCart[action.payload];
				state.totalCartQuantity = 0;
				Object.keys(state.shoppingCart).forEach((key) => {
					state.totalCartQuantity += state.shoppingCart[key];
				});
			}
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
		addQuantityToShoppingCart: (state, action) => {
			if (state.shoppingCart[action.payload.itemNo]) {
				let newVal = state.shoppingCart[action.payload.itemNo] + action.payload.addToQty;
				if (newVal < 1) {
					newVal = 1;
				}
				state.shoppingCart = { ...state.shoppingCart, [action.payload.itemNo]: newVal };
				// for auth update all cart
				if (localStorage.getItem("token")) {
					console.log(state.shoppingCart);
					const upCart = {
						products: [state.shoppingCart],
					};
					axios.put(`${DOMAIN}/cart`, upCart).then((data) => console.log(data));
				}
				//the end auth cart
				state.totalCartQuantity = 0;
				Object.keys(state.shoppingCart).forEach((key) => {
					state.totalCartQuantity += state.shoppingCart[key];
				});
			}
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
		setTotalCartSum: (state, action) => {
			state.totalCartSum = action.payload;
		},
		clearCart: (state) => {
			state.shoppingCart = {};
			state.totalCartQuantity = 0;
			state.totalCartSum = 0;
			localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
		},
	},
});
export const {
	removeItemShoppingCart,
	addShoppingCart,
	setTotalCartSum,
	addQuantityToShoppingCart,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
