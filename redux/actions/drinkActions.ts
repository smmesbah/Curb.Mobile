import { DrinkInformation } from "redux/reducers/drinkReducer";

export const addDrink = (drinkInfo: DrinkInformation) => ({
    type: 'ADD_DRINK',
    payload: drinkInfo,
});

export const removeDrink = (drinkInfo: DrinkInformation) => ({
    type: 'REMOVE_DRINK',
    payload: drinkInfo,
});
