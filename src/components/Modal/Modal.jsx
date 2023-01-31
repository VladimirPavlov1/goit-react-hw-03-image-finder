import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdrop}>
        <ModalWindow>{children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}
