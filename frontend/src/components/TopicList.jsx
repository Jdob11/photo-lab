import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics} = props;
  const topicsArray = topics.map(({ id, title }) => (
    <TopicListItem
      key={id}
      title={title}
    />
  ))
  return (
    <div className="top-nav-bar__topic-list">
      {topicsArray}
    </div>
  );
};

export default TopicList;
