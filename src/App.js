import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={''}
          />
        </Section>
      </div>
    );
  }
}
export default App;
