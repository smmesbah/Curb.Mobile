export interface DrinkInformation {
    drinkQuantity: number;
    drinkType: string;
    drinkSize: string;
}
export interface DrinkDetails {
    day: string;
    drinks: DrinkInformation;
}

interface Drink {
    day: string,
    drinks: DrinkInformation[]
}
interface DrinkState {
    drink: Drink[];
}

const initialState: DrinkState = {
    drink: [],
};

type DrinkAction =
    | { type: 'ADD_DRINK'; payload: DrinkDetails }
    | { type: 'REMOVE_DRINK'; payload: DrinkDetails };

const drinkReducer = (state: DrinkState = initialState, action: DrinkAction): DrinkState => {
    switch (action.type) {
        case 'ADD_DRINK':
            // console.log(action.payload)
            const { day } = action.payload;
            const updatedDrinks = state.drink.map(item => {
                if (item.day === day) {
                    return {
                        ...item,
                        drinks: [...item.drinks, action.payload.drinks]
                    }
                }
                return item;
            })

            //if the day doesn't exist in the array, add it
            if (!updatedDrinks.some(item => item.day === day)) {
                return {
                    ...state,
                    drink: [
                        ...state.drink,
                        {
                            day,
                            drinks: [action.payload.drinks]
                        }
                    ]
                };
            };

            // console.log(updatedDrinks)

            return {
                ...state,
                drink: updatedDrinks
            }
        case 'REMOVE_DRINK':
            const { day: removeDay} = action.payload;
            const { drinkQuantity, drinkType, drinkSize } = action.payload.drinks;
            return {
                ...state,
                drink: state.drink.map(drinkItem => {
                    if (drinkItem.day === removeDay) {
                        return {
                            ...drinkItem,
                            drinks: drinkItem.drinks.filter(drink =>
                                !(drink.drinkQuantity === drinkQuantity &&
                                    drink.drinkType === drinkType &&
                                    drink.drinkSize === drinkSize
                                )
                            )
                        };
                    }
                    return drinkItem;
                })
            };
        default:
            return state;
    }
};

export default drinkReducer;
