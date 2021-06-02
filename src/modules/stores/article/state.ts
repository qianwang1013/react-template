import { Article } from "../../types/topic";

export interface ArticleState {
  article?: Article;
  articles: Article[];
}

export const initialState: ArticleState = {
  article: undefined,
  articles: [],
};
