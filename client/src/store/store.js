import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import paginationReducer from "./reducers/paginationSlice";
import oneProductsReducer from "./reducers/oneProductSlice";
import slidesReducer from "./reducers/slidesSlice";
import someReducer from "./reducers/slice";

const store = configureStore({
	reducer: {
		some: someReducer,
		products: productsReducer,
		paginatedData: paginationReducer,
		slides: slidesReducer,
		oneProduct: oneProductsReducer,
	},
});

export default store;
