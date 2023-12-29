export interface WellbeingInfo {
    moodValue: number,
    sleepValue: number,
    energyValue: number,
    willPowerValue: number,
}

const initialState: WellbeingInfo={
    moodValue: -1,
    sleepValue: -1,
    energyValue: -1,
    willPowerValue: -1,
}

type wellbeingActions =
    | { type: 'SET_MOOD_VALUE'; payload: number }
    | { type: 'SET_ENERGY_VALUE'; payload: number }
    | { type: 'SET_SLEEP_VALUE'; payload: number }
    | { type: 'SET_WILLPOWER_VALUE'; payload: number }

const wellbeingReducer = (state = initialState, action: wellbeingActions) => {
    switch (action.type) {
        case 'SET_MOOD_VALUE':
            return {
                ...state,
                moodValue: action.payload,
            };
        case 'SET_ENERGY_VALUE':
            return {
                ...state,
                energyValue: action.payload,
            };
        case 'SET_SLEEP_VALUE':
            return {
                ...state,
                sleepValue: action.payload,
            };
        case 'SET_WILLPOWER_VALUE':
            return {
                ...state,
                willPowerValue: action.payload,
            };
        default:
            return state;
    }
}

export default wellbeingReducer;