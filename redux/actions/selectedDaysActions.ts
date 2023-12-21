import { dayDetails } from "redux/reducers/selectedDaysReducer";

export const addSelectedDay = (day: string) => ({
  type: 'ADD_SELECTED_DAY',
  payload: day,
});

export const removeSelectedDay = (day: string) => ({
  type: 'REMOVE_SELECTED_DAY',
  payload: day,
});

export const resetSelectedDays = () => ({
  type: 'RESET_SELECTED_DAYS',
});
