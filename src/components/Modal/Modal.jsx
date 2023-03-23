import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  };

  handleModalClose = ({code, target, currentTarget}) => {
    if(code === 'Escape' || target === currentTarget) {
        // Закриття по кнопці Esc чи кліку на бекдроп
        this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleModalClose}>
        <div className={css.Modal}>
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
