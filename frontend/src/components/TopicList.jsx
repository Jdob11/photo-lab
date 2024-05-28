import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, setTopic, chosenTopic } = props;
  const topicsArray = topics.map(({ id, title }) => (
    <TopicListItem
      key={id}
      id={id}
      title={title}
      setTopic={setTopic}
      isActive={id === chosenTopic}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicsArray}
    </div>
  );
};

export default TopicList;

