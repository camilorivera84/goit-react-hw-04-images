import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item">
    <img
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => onClick(image)}
    />
  </li>
);

export default ImageGalleryItem;
