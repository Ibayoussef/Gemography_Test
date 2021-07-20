import { SET_REPOS } from "../actions/repos";

const initState = {
  repos: {},
};

export default function reposReducer(state = initState, action) {
  switch (action.type) {
    case SET_REPOS:
      const allRepos = action.payload;

      return {
        repos: allRepos,
      };
    default:
      return state;
  }
}
