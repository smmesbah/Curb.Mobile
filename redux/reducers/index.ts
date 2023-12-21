// import {createStore} from 'redux'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import drinkReducer from './drinkReducer';
import selectedDaysReducer from './selectedDaysReducer';


const myReducer = combineReducers({
    counter: counterReducer,
    drink: drinkReducer,
    selecedDays: selectedDaysReducer,
})

export default myReducer;
