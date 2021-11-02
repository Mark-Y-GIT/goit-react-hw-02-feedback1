// import React from 'react';

// export default class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGoogClick = () =>
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });

//   handleNeutralClick = () =>
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   handleBadClick = () =>
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     let percent = parseInt((good / this.countTotalFeedback()) * 100);

//     return percent;
//   };

//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.handleGoogClick} className={s.btn}>
//           good
//         </button>
//         <button
//           type="button"
//           onClick={this.handleNeutralClick}
//           className={s.btn}
//         >
//           neutral
//         </button>
//         <button type="button" onClick={this.handleBadClick} className={s.btn}>
//           bad
//         </button>
//         <p>Statistics</p>
//         <ul>
//           <li>good {this.state.good}</li>
//           <li>neutral {this.state.neutral}</li>
//           <li>bad {this.state.bad}</li>
//           <li>Total {this.countTotalFeedback()}</li>
//           <li>
//             Positive Feedback Percentage
//             {this.countPositiveFeedbackPercentage()}%
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
