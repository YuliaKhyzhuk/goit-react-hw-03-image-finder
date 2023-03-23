import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesFound }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesFound.map(({ id, pageURL, tags, previewURL }) => (
        <ImageGalleryItem
          key={id}
          webFormatURL={previewURL}
          alt={tags}
          imageURLForModal={pageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesFound: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
