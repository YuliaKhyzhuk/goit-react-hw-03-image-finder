import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesFound }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesFound.map(({ id, webFormatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webFormatURL={webFormatURL}
          alt={tags}
          imageURLForModal={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesFound: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webFormatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
