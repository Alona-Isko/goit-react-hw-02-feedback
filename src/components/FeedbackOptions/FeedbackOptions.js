import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return options.map(option => (
        <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </button>
    ));
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;