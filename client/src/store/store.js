import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import someReducer from "./reducers/slice";

const store = configureStore({
	reducer: {
		some: someReducer,
		products: productsReducer,
	},
});

export default store;
