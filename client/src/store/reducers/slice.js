import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	loader: true,
};
export const fetchAuth = createAsyncThunk("user/login", async (object) => {
	return sendRequest(`${AUTH}login`, "POST", {
		body: JSON.stringify(object),
	});
});
export const fetchRegister = createAsyncThunk("user/register", async (object) => {
	return sendRequest(`${AUTH}register`, "POST", {
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
		});
	},
});
export default userSlice.reducer;
