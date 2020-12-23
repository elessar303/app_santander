import { SET_MESSAGE, CLEAR_MESSAGE } from "../constants/auth";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});