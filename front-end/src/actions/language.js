import { SET_LANGUAGE } from "../constants/auth";
export const langAction = (selectedLang) => (dispatch) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: { lang: selectedLang },
    });
  };
  