import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from '../style/style';

const Modal = ({ image, onClose }) => (
  <Overlay onClick={onClose}>
    <ModalContainer>
      <img src={image.largeImageURL} alt={image.tags} />
    </ModalContainer>
  </Overlay>
);

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
