import { RawDraftContentState } from "draft-js";
import { apiClient } from "../../services/apiClient";
import { Article } from "../../types/topic";

export enum ActionType {
  SAVE = "SAVE",
  GET = "GET",
  GET_ONE = "GET_ONE",
}

export interface SaveArticleAction {
  type: ActionType.SAVE;
  payload: Article;
}

export interface GetTopicsAction {
  type: ActionType.GET;
  payload: Article[];
}

export interface GetArticleAction {
  type: ActionType.GET_ONE;
  payload: Article;
}

export type Actions = SaveArticleAction | GetTopicsAction | GetArticleAction;
export type DispatchType = (args: Actions) => Actions;

export const saveArticle = (article: unknown) => async (
  dispatch: DispatchType
) => {
  const createdArticle = await apiClient.post<Article>("article", {
    data: JSON.stringify(article),
  });
  return dispatch({ type: ActionType.SAVE, payload: createdArticle });
};

export const getArticles = () => async (dispatch: DispatchType) => {
  const articles = await apiClient.get<Article[]>("article");
  return dispatch({ type: ActionType.GET, payload: articles });
};

export const getArticle = (id: string) => async (dispatch: DispatchType) => {
  const article = await apiClient.get<Article>(`article/${id}`);
  return dispatch({ type: ActionType.GET_ONE, payload: article });
};

export const updateArticle = (id: string, article: unknown) => async (
  dispatch: DispatchType
) => {
  const createdArticle = await apiClient.put(`article/${id}`, {
    data: JSON.stringify(article),
  });
  return dispatch({ type: ActionType.SAVE, payload: createdArticle });
};
