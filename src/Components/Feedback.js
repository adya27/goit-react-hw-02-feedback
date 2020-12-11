import React, { Component } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Statistics/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = (evt) => {
    this.setState((pr) => {
      return { good: pr.good + 1 };
    });
  };

  handleNeutral = (evt) => {
    this.setState((pr) => {
      return { neutral: pr.neutral + 1 };
    });
  };

  handleBad = (evt) => {
    this.setState((pr) => {
      return { bad: pr.bad + 1 };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;

    const ifInteger = ((this.state.good * 100) / countTotalFeedback) % 1 === 0;

    const countPositiveFeedbackPercentage = ifInteger
      ? (this.state.good * 100) / countTotalFeedback
      : ((this.state.good * 100) / countTotalFeedback).toFixed(2);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad}
        />

        {countTotalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default Feedback;
