import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, LoadMoreButton } from '../style/style';

const Button = ({ onClick }) => {
  return (
    <ButtonContainer>
      <LoadMoreButton onClick={onClick}>Load More</LoadMoreButton>
    </ButtonContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
