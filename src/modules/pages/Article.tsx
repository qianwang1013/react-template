import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { Sample } from "../../App";
import Card from "../components/card";
import RichEditor from "../components/editor";
import { ArticleState } from "../stores/article/state";
import { saveArticle } from "../stores/article/actions";

import "./styles.scss";

const connector = connect(
  (state: { article: ArticleState }) => ({
    article: !!state.article,
  }),
  (dispatch) => bindActionCreators({ saveArticle }, dispatch)
);

const Ariticle: React.FC<ConnectedProps<typeof connector>> = (props) => {
  return (
    <div className="page-container">
      <Card<Sample>>
        <RichEditor onSave={props.saveArticle} />
      </Card>
    </div>
  );
};

export default connector(Ariticle);
