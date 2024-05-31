import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * The TopicList component responsible for rendering a list of topics.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {Array} props.topics - An array of topic objects containing id and title.
 * @param {Function} props.setTopic - The function to set the current topic.
 * @param {string} props.chosenTopic - The currently chosen topic.
 * @returns {JSX.Element} The JSX element representing the list of topics.
 */

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

