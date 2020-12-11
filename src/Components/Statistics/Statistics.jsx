import React from "react";

import styles from "./Statistics.module.css";

function Statistics(prop) {
  return (
    <div>
      <h2>Statistics</h2>
      <span className={styles.Statistic}>Good: {prop.good}</span>
      <span className={styles.Statistic}>Neutral: {prop.neutral}</span>
      <span className={styles.Statistic}>Bad: {prop.bad}</span>
      <span>Total: {prop.total}</span>
      <h2>
        Positive feedback:
        {prop.positiveFeedback}%
      </h2>
    </div>
  );
}

export default Statistics;
