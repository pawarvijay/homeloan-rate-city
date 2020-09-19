import { SAVE } from "../actions/homeLoanAction";
const initialState = { hits: [], meta: {}, params: {} };
function homeLoanReducer(state, action) {
  switch (action.type) {
    case SAVE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export { homeLoanReducer, initialState };
