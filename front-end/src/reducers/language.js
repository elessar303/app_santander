import { SET_LANGUAGE } from "../constants/auth";

const lang = localStorage.getItem("lang") ;

const initialState = lang ? { lang } : {  lang: 'es' };

function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAGE:
        return {
            ...state,
            lang: payload.lang
          };

    default:
      return state;
  }
}

export default languageReducer;