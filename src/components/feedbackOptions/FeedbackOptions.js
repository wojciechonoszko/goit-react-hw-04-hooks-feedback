import {React} from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonList } from './ButtonStyles';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
        <ButtonList>
        {options.map(option => (
                <ButtonContainer
                key={option}
                type='button'
                data-option={option}
                onClick={onLeaveFeedback}
                >
                    {option}
                </ButtonContainer>
            ))}
        </ButtonList>
            
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;