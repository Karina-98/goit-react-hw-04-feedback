import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper } from './feedback.styled';

export const FeedbackOptions =({onLeaveFeedback, options}) =>{

    return (
      <Wrapper>
          {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
       
      </Wrapper>
    );
  }

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

