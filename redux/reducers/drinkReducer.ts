export interface DrinkInformation {
    day: string;
    drinkQuantity: number;
    drinkType: string;
    drinkSize: string;
}

interface DrinkState {
    drink: DrinkInformation[];
}

const initialState: DrinkState = {
    drink: [],
};

type DrinkAction =
    | { type: 'ADD_DRINK'; payload: DrinkInformation }
    | { type: 'REMOVE_DRINK'; payload: DrinkInformation };

const drinkReducer = (state: DrinkState = initialState, action: DrinkAction): DrinkState => {
    switch (action.type) {
        case 'ADD_DRINK':
            // console.log(state.drink);
            return {
                ...state,
                drink: [...state.drink, action.payload],
            };
        case 'REMOVE_DRINK':
            const { day, drinkQuantity, drinkType, drinkSize } = action.payload;
            return {
                ...state,
                drink: state.drink.filter(
                    (drink) =>
                        !(drink.day === day &&
                        drink.drinkQuantity === drinkQuantity &&
                        drink.drinkType === drinkType &&
                        drink.drinkSize === drinkSize)
                ),
            };
        default:
            return state;
    }
};

export default drinkReducer;
