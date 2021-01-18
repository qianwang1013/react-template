import { Topic } from "../../types/topic";

export interface ArticleState {
  article?: unknown;
  topics: Topic[];
}

export const initialState: ArticleState = {
  article: undefined,
  topics: [],
};
