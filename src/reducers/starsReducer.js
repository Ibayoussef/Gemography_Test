import { SET_MOST_STARED } from "../actions/mostStared";

const initState = {
  stars: [],
};

export default function starsReducer(state = initState, action) {
  switch (action.type) {
    case SET_MOST_STARED:
      const allStared = action.payload;

      return {
        stars: allStared,
      };
    default:
      return state;
  }
}
