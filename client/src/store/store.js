import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import onePproductsReducer from "./reducers/oneProductSlice";
import someReducer from "./reducers/slice";

const store = configureStore({
	reducer: {
		some: someReducer,
		products: productsReducer,
		oneProduct: onePproductsReducer,
	},
});

export default store;
