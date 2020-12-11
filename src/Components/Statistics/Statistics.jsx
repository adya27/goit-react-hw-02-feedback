import React from "react";

function Statistics(prop) {
  return (
    <div>
      <h2>Statistics</h2>
      <span style={{ marginRight: "10px" }}>Good: {prop.good}</span>
      <span style={{ marginRight: "10px" }}>Neutral: {prop.neutral}</span>
      <span style={{ marginRight: "10px" }}>Bad: {prop.bad}</span>
      <span>Total: {prop.total}</span>
      <h2>
        Positive feedback:
        {prop.positiveFeedback}%
      </h2>
    </div>
  );
}

export default Statistics;
