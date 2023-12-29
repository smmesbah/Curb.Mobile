import { CheckinDrinkInformation } from "redux/reducers/checkinDrinkReducer";

export const addCheckinDrink = (drinkInfo: CheckinDrinkInformation) => ({
    type: 'ADD_CHECKIN_DRINK',
    payload: drinkInfo,
});

export const removeCheckinDrink = (drinkInfo: CheckinDrinkInformation) => ({
    type: 'REMOVE_CHECKIN_DRINK',
    payload: drinkInfo,
});
