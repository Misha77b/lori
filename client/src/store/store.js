import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import oneProductsReducer from "./reducers/oneProductSlice";
import slidesReducer from "./reducers/slidesSlice";
import modalReducer from "./reducers/modalSlice";
import authReducer from "./reducers/authSlice";
import searchReducer from "./reducers/searchSlice";
import filtersReducer from "./reducers/filtersSlice";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		products: productsReducer,
		slides: slidesReducer,
		oneProduct: oneProductsReducer,
		cart: cartReducer,
		modal: modalReducer,
		search: searchReducer,
		filters: filtersReducer,
	},
});

export default store;
