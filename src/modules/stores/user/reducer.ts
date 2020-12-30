import { UserState, initialState } from "./state";
import { Actions, ActionType } from "./actions";

const reducer = (
  state: UserState = initialState,
  action: Actions
): UserState => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
