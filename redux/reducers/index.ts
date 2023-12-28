// import {createStore} from 'redux'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import drinkReducer from './drinkReducer';
import selectedDaysReducer from './selectedDaysReducer';
import wellbeingReducer from './wellbeingReducer';
import habitReducer from './habitReducer';


const myReducer = combineReducers({
    counter: counterReducer,
    drink: drinkReducer,
    selecedDays: selectedDaysReducer,
    wellbeing: wellbeingReducer,
    habit: habitReducer,
})

export default myReducer;
