import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  };

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleModalClose);
  };

  handleModalClose = ({code, target, currentTarget}) => {
    if(code === 'Escape' || target === currentTarget) {
        this.props.onClose();
    };
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleModalClose}>
        <div className={css.Modal}>
          { children }
        </div>
      </div>, modalRoot,
    );
  }
}

export default Modal;
