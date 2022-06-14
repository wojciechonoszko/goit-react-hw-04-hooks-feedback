import React from 'react';
import PropTypes from 'prop-types';
import {StatisticElem} from './StatisticStyles';

const Statistic = ({options, feedback, total, positivePercentage}) => {
    return (
        <>
            {options.map(option => (
                <StatisticElem key={option}>
                    {option}: {feedback[option]}
                </StatisticElem>
            ))}
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </>
    );
}

Statistic.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    feedback: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistic;