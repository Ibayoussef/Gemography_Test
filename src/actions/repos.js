import { API_ENDPOINT } from "../constants";

import axios from "axios";
export const SET_REPOS = "SET_REPOS";

const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos,
});
// get repos from the server
export function fetchRepos() {
  return (dispatch) => {
    return axios
      .get(API_ENDPOINT)
      .then((res) => dispatch(setRepos(res.data.items)))
      .catch((err) => console.error(err));
  };
}
