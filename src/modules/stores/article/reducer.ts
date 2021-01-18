import { ArticleState, initialState } from "./state";
import { Actions, ActionType } from "./actions";

const reducer = (
  state: ArticleState = initialState,
  action: Actions
): ArticleState => {
  switch (action.type) {
    case ActionType.SAVE:
      return {
        ...state,
        article: action.payload,
      };
    case ActionType.GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
