import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../../helpers/sendRequest";
import { DOMAIN } from "../../config/API";

const initialState = {
	data: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItems: (state, { payload }) => {
			state.data = [payload, ...state.data];
		},
		removeItem: (state, { payload }) => {
			state.data = state.data.filter(({ _id: id }) => id !== payload);
		},
	},
});

export const { addItems, removeItem } = cartSlice.actions;

export const actionFetchCart = (items) => async (dispatch) => {
	if (!items) return null;
	return items.map((id) => {
		return sendRequest(`${DOMAIN}/products/${id}`).then((data) => dispatch(addItems(data)));
	});
};

export default cartSlice.reducer;
