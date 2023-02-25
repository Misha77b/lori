import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default cartSlice.reducer;
