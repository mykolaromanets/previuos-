import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section className="Section__general">
      <h2 className="Title__general">Please leave feedback</h2>
      <ul className="List__styled">
        {options.map(option => (
          <li key={option} className="Item__styled">
            <button
              type="button"
              className="Btn__styled"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeedbackOptions;
