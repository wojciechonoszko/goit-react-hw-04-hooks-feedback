import {React, Component} from 'react';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistic from './components/statistic/Statistic';
import Notification from './components/notification/Notification';
import Section from './components/section/Section';




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state);

  /*   constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    this.options = Object.keys(this.state);
    //this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  } */

  onLeaveFeedback = event => {
    const option = event.target.dataset.option;
    this.setState(prevState => ({[option]: prevState[option] + 1}));
  };

  getTotal() {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />

        </Section>
        <Section title="Statistics">
          {this.getTotal() ? (
            <Statistic
            options={this.options}
            feedback={this.state}
            total={this.getTotal()}
            positivePercentage={
              this.getTotal() !== 0
              ? Math.round(this.state.good / this.getTotal() * 100)
              : 0
            }
            ></Statistic>
          ):(
            <Notification message = "No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;