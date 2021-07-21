import { API_MOST_STARS } from "../constants";

import axios from "axios";
export const SET_MOST_STARED = "SET_MOST_STARED";

const setStars = (stared) => ({
  type: SET_MOST_STARED,
  payload: stared,
});
// get stars from the server
export function fetchStars() {
  return (dispatch) => {
    return axios
      .get(API_MOST_STARS)
      .then((res) => dispatch(setStars(res.data.items)))
      .catch((err) => console.error(err));
  };
}
