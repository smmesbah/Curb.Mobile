// import {createStore} from 'redux'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import drinkReducer from './drinkReducer';
import selectedDaysReducer from './selectedDaysReducer';
import wellbeingReducer from './wellbeingReducer';


const myReducer = combineReducers({
    counter: counterReducer,
    drink: drinkReducer,
    selecedDays: selectedDaysReducer,
    wellbeing: wellbeingReducer,
})

export default myReducer;
