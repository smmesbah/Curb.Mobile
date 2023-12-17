// import {createStore} from 'redux'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import drinkReducer from './drinkReducer';


const myReducer = combineReducers({
    counter: counterReducer,
    drink: drinkReducer
})

export default myReducer;
