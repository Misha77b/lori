import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";

const initialState = {
	user: {},
	isAuth: false,
	loader: true,
	error: null,
};
export const fetchAuth = createAsyncThunk("user/login", async (object) => {
	// eslint-disable-next-line no-useless-catch
	try {
		const response = await axios.post(`${DOMAIN}/customers/login`, object);
		localStorage.setItem("token", response.data.token);
		return response.data;
	} catch (error) {
		throw error;
	}
});
export const fetchRegister = createAsyncThunk("user/register", async (object) => {
	axios
		.post(`${DOMAIN}/customers`, object)
		.then((savedCustomer) => savedCustomer)
		.catch((err) => {
			throw err;
		});
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
	},
	extraReducers: {
		[fetchAuth.pending]: (state) => {
			state.loader = true;
			state.error = null;
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isAuth = true;
			state.loader = false;
		},
		[fetchAuth.rejected]: (state, action) => {
			state.loader = false;
			state.error = action.error.message;
		},
	},
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;
