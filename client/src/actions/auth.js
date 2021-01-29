import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (form, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (form, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
