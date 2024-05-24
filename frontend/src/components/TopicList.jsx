import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({ id, title}) => (
        <TopicListItem
          key={id}
          title={title}
        />
      ))}
    </div>
  );
};

export default TopicList;
