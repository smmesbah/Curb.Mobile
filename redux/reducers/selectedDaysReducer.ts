

const initialState = {
  selectedDays: [],
};

export interface dayDetails {
    day: string;
}

type selectedDaysActions =
    | { type: 'ADD_SELECTED_DAY'; payload: dayDetails }
    | { type: 'REMOVE_SELECTED_DAY'; payload: dayDetails }
    | { type: 'RESET_SELECTED_DAYS' };

const selectedDaysReducer = (state = initialState, action: selectedDaysActions) => {
  switch (action.type) {
    case 'ADD_SELECTED_DAY':
      return {
        ...state,
        selectedDays: [...state.selectedDays, action.payload],
      };
    case 'REMOVE_SELECTED_DAY':
      return {
        ...state,
        selectedDays: state.selectedDays.filter((day) => day !== action.payload),
      };
    case 'RESET_SELECTED_DAYS':
      return {
        ...state,
        selectedDays: [],
      };
    default:
      return state;
  }
};

export default selectedDaysReducer;
