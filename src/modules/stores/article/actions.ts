import { RawDraftContentState } from "draft-js";
import { apiClient } from "../../services/apiClient";
import { Topic } from "../../types/topic";

export enum ActionType {
  SAVE = "SAVE",
  GET_TOPICS = "GET_TOPICS",
}

export interface SaveArticleAction {
  type: ActionType.SAVE;
  payload: RawDraftContentState;
}

export interface GetTopicsAction {
  type: ActionType.GET_TOPICS;
  payload: Topic[];
}

export type Actions = SaveArticleAction | GetTopicsAction;
export type DispatchType = (args: Actions) => Actions;

export const saveArticle = (article: RawDraftContentState) => async (
  dispatch: DispatchType
) => {
  const createdArticle = await apiClient.post("article", {
    name: "sample",
    text: article,
  });
  return dispatch({ type: ActionType.SAVE, payload: createdArticle });
};

export const getTopics = () => async (dispatch: DispatchType) => {
  const topics = await apiClient.get<Topic[]>("article");
  return dispatch({ type: ActionType.GET_TOPICS, payload: topics });
};
