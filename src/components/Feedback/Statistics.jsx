import React from 'react';

const Statistics = ({ good, neutral, bad, total, onPositivePercentage }) => {
  const positivePercentage = onPositivePercentage(); // Виклик функції для отримання значення

  return (
    <>
      <section className="Section__general">
        <h2 className="Title__general">Statistics</h2>
        <p className="Text__general">Good: {good}</p>
        <p className="Text__general">Neutral: {neutral}</p>
        <p className="Text__general">Bad: {bad}</p>
        <p className="Text__general">Total: {total}</p>
        <p className="Text__general">
          Positive feedback: {positivePercentage}%
        </p>
      </section>
    </>
  );
};

export default Statistics;
