import React from "react";
import PropTypes from 'prop-types'; 
import "../styles/TopicListItem.scss";

/**
 * The TopicListItem component responsible for rendering an individual topic item in the topic list.
 * @param {Object} props - The props passed to the component.
 * 
 * @param {string} props.title - The title of the topic.
 * @param {string} props.id - The ID of the topic.
 * @param {Function} props.setTopic - The function to set the current topic.
 * @param {boolean} props.isActive - Indicates whether the topic is currently active.
 * @returns {JSX.Element} The JSX element representing the topic item.
 */

const TopicListItem = (props) => {
  const {
    title,
    id,
    setTopic,
    isActive
  } = props;

  return (
    <div className="topic-list__item">
      <span 
        className={isActive ? 'active-span' : ''} 
        onClick={() => setTopic(id)}
      >{title}</span>
    </div>
  );
};

TopicListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setTopic: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TopicListItem;
