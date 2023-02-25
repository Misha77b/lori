import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import paginationReducer from "./reducers/paginationSlice";
import oneProductsReducer from "./reducers/oneProductSlice";
import slidesReducer from "./reducers/slidesSlice";
import someReducer from "./reducers/slice";
import modalReducer from "./reducers/modalSlice";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
	reducer: {
		some: someReducer,
		auth: authReducer,
		products: productsReducer,
		paginatedData: paginationReducer,
		slides: slidesReducer,
		oneProduct: oneProductsReducer,
		cart: cartReducer,
		modal: modalReducer,
	},
});

export default store;
