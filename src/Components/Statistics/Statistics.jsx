import React from "react";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  bad: PropTypes.string.isRequired,
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default Statistics;
