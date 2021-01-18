import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import Topic from "../components/topic";
import Button from "../components/button";
import TopicDialog from "../components/form/topic";
import { ArticleState } from "../stores/article/state";
import { getTopics } from "../stores/article/actions";
import "./styles.scss";
import classNames from "classnames";

const connector = connect(
  (state: { article: ArticleState }) => ({
    topics: state.article.topics,
  }),
  (dispatch) => bindActionCreators({ getTopics }, dispatch)
);

const Main: React.FC<ConnectedProps<typeof connector>> = (props) => {
  const { topics, getTopics } = props;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className={classNames({ "page-container": true, main: true })}>
      <Button
        className="main__create-topic-button"
        onClick={() => setIsDialogOpen(!isDialogOpen)}
      >
        New Topic
      </Button>
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
      <TopicDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
};

export default connector(Main);
