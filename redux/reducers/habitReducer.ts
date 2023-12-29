export interface HabitInfo {
    setLocation: string,
    setActivity: string,
    setPeople: string,
}

const initialState: HabitInfo={
    setLocation: '',
    setActivity: '',
    setPeople: '',
}

type habitActions =
    | { type: 'SET_LOCATIONS'; payload: string }
    | { type: 'SET_ACTIVITIES'; payload: string }
    | { type: 'SET_PEOPLE'; payload: string }

const habitReducer = (state = initialState, action: habitActions) => {
    switch (action.type) {
        case 'SET_LOCATIONS':
            return {
                ...state,
                setLocation: action.payload,
            };
        case 'SET_ACTIVITIES':
            return {
                ...state,
                setActivity: action.payload,
            };
        case 'SET_PEOPLE':
            return {
                ...state,
                setPeople: action.payload,
            };
        default:
            return state;
    }
}

export default habitReducer;