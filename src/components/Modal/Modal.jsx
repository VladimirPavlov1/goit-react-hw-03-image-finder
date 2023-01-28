import {createPortal} from 'react-dom';
import { Component } from 'react';
import { Backdrop,ModalWindow } from './Modal.styled';

const modalRoot=document.querySelector('#modal-root');

export default class Modal extends Component{

    state = {
        showModal: false,
        
      };

    componentDidMount() {
        console.log('didmount')
        window.addEventListener('keydown', this.handleKey);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey);
    }
    
    handleKey = e => {
        if (e.code === 'Escape') {
          console.log('esc')
          
        }
    };
  


    render(){
        const{children}=this.props
       
    return createPortal(
        <Backdrop >
            <ModalWindow onClick={this.toggleModal}>{children}</ModalWindow>
        </Backdrop>,
     modalRoot)}
}
