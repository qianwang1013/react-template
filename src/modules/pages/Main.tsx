import "@react-page/editor/lib/index.css";
import "@react-page/plugins-image/lib/index.css";
import "@react-page/plugins-slate/lib/index.css";
import classNames from "classnames";
import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import ReactPage from "../components/reactPage";
import { getArticles } from "../stores/article/actions";
import { ArticleState } from "../stores/article/state";
import "./styles.scss";

const connector = connect(
  (state: { article: ArticleState }) => ({
    articles: state.article.articles,
  }),
  (dispatch) => bindActionCreators({ getArticles }, dispatch)
);

const Main: React.FC<ConnectedProps<typeof connector>> = (props) => {
  const { articles, getArticles } = props;

  React.useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className={classNames({ "page-container": true, main: true })}>
      {articles.map((article) => (
        <ReactPage key={article.id} article={article} readOnly={true} />
      ))}
    </div>
  );
};

export default connector(Main);
