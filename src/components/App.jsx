import { Component } from 'react';
import Feedbacks from './Feedbacks/Feedbacks';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
//--------------------------------------------------------------------//

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  handlerBtn = e => {
    const { name } = e.target;
    this.setState(ps => {
      return { [name]: ps[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Feedbacks
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlerBtn}
          ></Feedbacks>
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export { App };