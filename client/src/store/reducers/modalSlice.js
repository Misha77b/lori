import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "settingModal",
	initialState: { value: [] },
	reducers: {
		setModal: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
