import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import jwt_decode from "jwt-decode";
import { DOMAIN } from "../../config/API";

const initialState = {
	user: {},
	isAuth: false,
	loader: true,
};
export const fetchAuth = createAsyncThunk("user/login", async (object) => {
	axios
		.post(`${DOMAIN}/customers/login`, object)
		.then(({ data }) => {
			// const decoded = jwt_decode(data.token);
			localStorage.setItem("token", data.token);
		})
		.catch((err) => console.warn(err));
});
export const fetchRegister = createAsyncThunk("user/register", async (object) => {
	axios
		.post(`${DOMAIN}/customers`, object)
		.then((savedCustomer) => savedCustomer)
		.catch((err) => console.warn(err));
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
	},

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

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;
