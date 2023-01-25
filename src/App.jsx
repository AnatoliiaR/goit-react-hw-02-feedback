import React, { Component } from 'react';
import style from '../src/App.module.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrement = e => {
  //   let name = e.target.name;
  //   console.log(name);
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  handleIncrement = data => {
    return this.setState(prevState => {
      return { [data]: prevState[data] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return ((good / total) * 100).toFixed(0);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.App}>
        <p className={style.title}>
          React homework "feedback" by Anatoliia Riabchenko
        </p>
        <div className={style.section}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>
          <Section title="Statistics">
            {!total > 0 ? (
              <Notification message="There is no feedback"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
