import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import oneProductsReducer from "./reducers/oneProductSlice";
import slidesReducer from "./reducers/slidesSlice";
import modalReducer from "./reducers/modalSlice";
import authReducer from "./reducers/authSlice";
import ordersReducer from "./reducers/ordersSlice";
import searchReducer from "./reducers/searchSlice";
import filtersReducer from "./reducers/filtersSlice";
import cartReducer from "./reducers/cartSlice";
import favoriteReducer from "./reducers/favoriteSlice";
import customerReducer from "./reducers/getCustomerInfoSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		customer: customerReducer,
		products: productsReducer,
		slides: slidesReducer,
		oneProduct: oneProductsReducer,
		cart: cartReducer,
		modal: modalReducer,
		orders: ordersReducer,
		search: searchReducer,
		filters: filtersReducer,
		favorite: favoriteReducer,
	},
});

export default store;
