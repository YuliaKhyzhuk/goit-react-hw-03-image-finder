import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    webFormatURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imageURLForModal: PropTypes.string.isRequired,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webFormatURL, alt, imageURLForModal } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem__image}
          src={webFormatURL}
          alt={alt}
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={imageURLForModal} tags={alt} />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
