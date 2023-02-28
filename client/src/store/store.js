import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import oneProductsReducer from "./reducers/oneProductSlice";
import slidesReducer from "./reducers/slidesSlice";
import modalReducer from "./reducers/modalSlice";
import authReducer from "./reducers/authSlice";
import filtersReducer from "./reducers/filtersSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		products: productsReducer,
		slides: slidesReducer,
		oneProduct: oneProductsReducer,
		modal: modalReducer,
		filters: filtersReducer,
	},
});

export default store;
