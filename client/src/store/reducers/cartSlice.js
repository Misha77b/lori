import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	shoppingCart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setShoppingCart: (state, action) => {
			state.shoppingCart = action.payload;
		},
		removeItemShoppingCart: (state, action) => {
			state.shoppingCart = state.shoppingCart.filter(({ itemNo: id }) => id !== action.payload);
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
export const { setShoppingCart, removeItemShoppingCart } = cartSlice.actions;
export default cartSlice.reducer;
