import {React} from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonList } from './ButtonStyles';

export default function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <>
        <ButtonList>
            {options.map((item) => (
                <ButtonContainer
                key={item}
                type='button'
                onClick={() => onLeaveFeedback(item)}
                >
                    {item}
                </ButtonContainer>
            ))}
        </ButtonList>
        </>
    )
}
// const FeedbackOptions = ({options, onLeaveFeedback}) => {
//     return (
//         <>
//         <ButtonList>
//         {options.map(option => (
//                 <ButtonContainer
//                 key={option}
//                 type='button'
//                 data-option={option}
//                 onClick={onLeaveFeedback}
//                 >
//                     {option}
//                 </ButtonContainer>
//             ))}
//         </ButtonList>
            
//         </>
//     )
// }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    clickGood: PropTypes.func.isRequired
};

//export default FeedbackOptions;