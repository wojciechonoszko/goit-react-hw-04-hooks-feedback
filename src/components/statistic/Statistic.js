import React from 'react';
import PropTypes from 'prop-types';
import {StatisticElem} from './StatisticStyles';

export default function Statistics({
    good,
    bad,
    neutral,
    positivePercentage,
    total,
}) {
    return (
        <StatisticElem>
          <li>Good: {good}</li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {total} </li>
          <li>
            Positive feedback:
            {total > 0 && positivePercentage}%
          </li>
        </StatisticElem>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };
    

// const Statistic = ({options, feedback, total, positivePercentage}) => {
//     return (
//         <>
//             {options.map(option => (
//                 <StatisticElem key={option}>
//                     {option}: {feedback[option]}
//                 </StatisticElem>
//             ))}
//             <p>Total: {total}</p>
//             <p>Positive feedback: {positivePercentage}%</p>
//         </>
//     );
// }

// Statistic.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string.isRequired),
//     feedback: PropTypes.object.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired
// };

// export default Statistic;