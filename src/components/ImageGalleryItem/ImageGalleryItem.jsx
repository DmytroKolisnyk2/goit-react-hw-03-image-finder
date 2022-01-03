import React from "react";
import "./ImageGalleryItem.scss";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ url, description, onClick }) => {
  return (
    <li onClick={onClick} className="gallery-item">
      <img src={url} alt={description} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  description: "photo preview",
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
