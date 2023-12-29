export interface CheckinDrinkInformation {
    id: number,
    drinkName: string,
    drinkVolume: string,
    drinkQuantity: number,
}

interface CheckinDrinkState {
    drinks: CheckinDrinkInformation[];
}

const initialState: CheckinDrinkState = {
    drinks: [],
}

type CheckinDrinkAction =
    | { type: 'ADD_CHECKIN_DRINK'; payload: CheckinDrinkInformation }
    | { type: 'REMOVE_CHECKIN_DRINK'; payload: CheckinDrinkInformation };

const checkinDrinkReducer = (state: CheckinDrinkState = initialState, action: CheckinDrinkAction): CheckinDrinkState => {
    switch (action.type) {
        case 'ADD_CHECKIN_DRINK':
            return {
                ...state,
                drinks: [...state.drinks, action.payload]
            };
        case 'REMOVE_CHECKIN_DRINK':
            // console.log('Remove drink action payload:', action.payload); // Add this line for debugging
            return {
                ...state,
                drinks: state.drinks.filter(drink => drink.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default checkinDrinkReducer;