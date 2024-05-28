import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, id, setTopic, isActive } = props;
  return (
    <div className="topic-list__item">
      <span 
        className={isActive ? 'active-span' : ''} 
        onClick={() => setTopic(id)}
      >{title}</span>
    </div>
  );
};

export default TopicListItem;
