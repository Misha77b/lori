import { configureStore } from "@reduxjs/toolkit";
import someReducer from "../reducers/slice";

const store = configureStore({
	reducer: {
		some: someReducer,
	},
});

export default store;
