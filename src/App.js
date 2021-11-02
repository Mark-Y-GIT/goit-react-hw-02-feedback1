import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    let percent = parseInt((good / this.countTotalFeedback()) * 100);

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countPositiveFeedbackPercentage, countTotalFeedback } = this;
    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
export default App;
