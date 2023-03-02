import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	shoppingCart: JSON.parse(localStorage.getItem("cart") || "[]"),
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
	},
});

// export const actionFetchCart = (items) => async (dispatch) => {
// 	if (!items) return null;
// 	return items.map((id) => {
// 		return sendRequest(`${DOMAIN}/products/${id}`).then((data) => dispatch(addItems(data)));
// 	});
// };
export const fetchCart = createAsyncThunk("cart/fetchData", async (newCart) => {
	const response = await axios.post(`${DOMAIN}/cart`, newCart);
	return response;
});
export const { removeItemShoppingCart, addShoppingCart } = cartSlice.actions;
export default cartSlice.reducer;
