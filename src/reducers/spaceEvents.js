import {
  FETCH_LAUNCHES_REQEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_ERROR,
} from "./../actionTypes";

const initialState = {
  launches: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQEST:
      return {
        ...state,
      };
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.payload.launches,
      };
    default:
      return state;
  }
};
