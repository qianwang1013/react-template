import * as React from "react";
import { parseDateToMDY } from "../../../utils/date";
import { Topic } from "../../types/topic";
import "./styles.scss";

interface TopicProps {
  topic: Topic;
}

const TopicComp: React.FC<TopicProps> = ({ topic }) => {
  return (
    <div className="topic-container">
      <div className="topic-container__timestamp">
        Created At <> {parseDateToMDY(topic.createdAt)}</>
      </div>
      <div className="topic-container__content">{topic.name}</div>
      <div className="topic-container__summary">{topic.summary}</div>
    </div>
  );
};

export default TopicComp;
