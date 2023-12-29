// import {createStore} from 'redux'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import drinkReducer from './drinkReducer';
import selectedDaysReducer from './selectedDaysReducer';
import wellbeingReducer from './wellbeingReducer';
import habitReducer from './habitReducer';
import checkinDrinkReducer from './checkinDrinkReducer';


const myReducer = combineReducers({
    counter: counterReducer,
    drink: drinkReducer,
    selecedDays: selectedDaysReducer,
    wellbeing: wellbeingReducer,
    habit: habitReducer,
    checkinDrinks: checkinDrinkReducer,
})

export default myReducer;
