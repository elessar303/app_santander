import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    SET_LANGUAGE
  } from "../constants/auth";
  
  import { login, logout} from "../services/apiauth";

  export const loginAction = (username, password) => (dispatch) => {
    return login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });

        dispatch({
          type: SET_LANGUAGE,
          payload: { lang: 'es' },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
export const logoutAction = () => (dispatch) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: SET_LANGUAGE,
    payload: { lang: 'es' },
  });
};
