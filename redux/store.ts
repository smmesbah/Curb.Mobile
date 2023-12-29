import { configureStore } from "@reduxjs/toolkit";
import myReducer from './reducers/index';

const store = configureStore({
    reducer: myReducer
})

export default store;