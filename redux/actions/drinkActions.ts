import { DrinkDetails } from "redux/reducers/drinkReducer";

export const addDrink = (drinkInfo: DrinkDetails) => ({
    type: 'ADD_DRINK',
    payload: drinkInfo,
});

export const removeDrink = (drinkInfo: DrinkDetails) => ({
    type: 'REMOVE_DRINK',
    payload: drinkInfo,
});
