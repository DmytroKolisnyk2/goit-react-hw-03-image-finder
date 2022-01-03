import React from "react";
import "./ImageGallery.scss";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ photoData, children, setLargeImage }) => {
  return (
    <ul className="ImageGallery">
      {photoData.map((item) => (
        <ImageGalleryItem
          onClick={() => setLargeImage(item.largeImageURL)}
          key={item.id}
          url={item.webformatURL}
          description={item.tags}
        />
      ))}
      {children}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photoData: PropTypes.array.isRequired,
  setLargeImage: PropTypes.func.isRequired,
};
