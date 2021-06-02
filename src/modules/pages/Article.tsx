import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactPage from "../components/reactPage";
import {
  saveArticle,
  getArticle,
  updateArticle,
} from "../stores/article/actions";
import { ArticleState } from "../stores/article/state";
import "./styles.scss";

const connector = connect(
  (state: { article: ArticleState }) => ({
    article: state.article.article,
  }),
  (dispatch) =>
    bindActionCreators({ saveArticle, getArticle, updateArticle }, dispatch)
);

const Ariticle: React.FC<ConnectedProps<typeof connector>> = (props) => {
  const { id } = useParams<{ id: string }>();
  const { article, getArticle, saveArticle, updateArticle } = props;
  React.useEffect(() => {
    if (id) {
      getArticle(id);
    }
  }, []);

  return (
    <div className="page-container">
      <ReactPage
        article={article}
        saveArticle={saveArticle}
        updateArticle={updateArticle}
      />
    </div>
  );
};

export default connector(Ariticle);
