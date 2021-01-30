import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(form);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(form);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
