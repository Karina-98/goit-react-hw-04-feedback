import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{countTotalFeedback}</p>
      <p>Positive Feedback:{countPositiveFeedbackPercentage}</p>
    </>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  };
