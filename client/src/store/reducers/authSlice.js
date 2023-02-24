import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../../helpers/sendRequest";
import { DOMAIN } from "../../config/API";

const initialState = {
	user: {},
	loader: true,
};
export const fetchAuth = createAsyncThunk("user/login", async (object) => {
	return sendRequest(`${DOMAIN}/customers/login`, "POST", {
		body: JSON.stringify(object),
	});
});
export const fetchRegister = createAsyncThunk("user/register", async (object) => {
	return sendRequest(`${DOMAIN}/customers`, "POST", {
		body: JSON.stringify(object),
	});
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuth.pending, (state) => {
			state.loader = true;
		});

		builder.addCase(fetchAuth.fulfilled, (state, action) => {
			state.user = action.payload;
			state.loader = false;
			console.log("payload", action.payload);
		});
	},
});
export default userSlice.reducer;
