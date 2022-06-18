import { useState } from "react";

import {React} from 'react';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistic from './components/statistic/Statistic';
import Notification from './components/notification/Notification';
import Section from './components/section/Section';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnClick = (options) => {
    switch (options) {
      case "good":
        setGood((good) => good + 1);
        break;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;
      case "bad":
        setBad((bad) => bad + 1);
        break;

      default:
        return;
    }
  };

  const getTotal = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round((good / total) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  const options = ["good", "neutral", "bad"];
  const total = getTotal();
  const percent = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={btnClick}
        />

      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          ></Statistic>
        ):(
          <Notification message = "No feedback given"></Notification>
        )}
      </Section>
    </>
  );

}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   options = Object.keys(this.state);



 

//   onLeaveFeedback = event => {
//     const option = event.target.dataset.option;
//     this.setState(prevState => ({[option]: prevState[option] + 1}));
//   };

//   getTotal() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />

//         </Section>
//         <Section title="Statistics">
//           {this.getTotal() ? (
//             <Statistic
//             options={this.options}
//             feedback={this.state}
//             total={this.getTotal()}
//             positivePercentage={
//               this.getTotal() !== 0
//               ? Math.round(this.state.good / this.getTotal() * 100)
//               : 0
//             }
//             ></Statistic>
//           ):(
//             <Notification message = "No feedback given"></Notification>
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;