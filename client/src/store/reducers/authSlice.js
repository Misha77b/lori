import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../config/API";
import setAuthToken from "../../config/setAuthToken";
import { getLocalItem } from "../../helpers/getLocalItem";
import { getFavorites } from "./favoriteSlice";
import { fetchCustomer } from "./getCustomerInfoSlice";
import { getCartAuth } from "./cartSlice";

const initialState = {
	user: {},
	isAuth: false,
	loader: true,
	error: null,
	tokenUser: "",
};
export const fetchAuth = createAsyncThunk("user/login", async (object, thunkAPI) => {
	// eslint-disable-next-line no-useless-catch
	try {
		const response = await axios.post(`${DOMAIN}/customers/login`, object);
		localStorage.setItem("token", response.data.token);
		await thunkAPI.dispatch(getFavorites());
		await thunkAPI.dispatch(getCartAuth());
		await thunkAPI.dispatch(fetchCustomer());
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
			if (state.isAuth) {
				state.tokenUser = getLocalItem("token");
			} else {
				state.tokenUser = "";
			}

			setAuthToken(state.tokenUser);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAuth.pending, (state) => {
				state.loader = true;
				state.error = null;
			})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuth = true;
				state.loader = false;
			})
			.addCase(fetchAuth.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			});
	},
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;
