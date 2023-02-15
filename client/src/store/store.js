import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import slidesReducer from "./reducers/slidesSlice";
import someReducer from "./reducers/slice";

const store = configureStore({
	reducer: {
		some: someReducer,
		products: productsReducer,
		slides: slidesReducer,
	},
});

export default store;
