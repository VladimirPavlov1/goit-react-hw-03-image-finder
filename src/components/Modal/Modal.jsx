import {createPortal} from 'react-dom';
import { Component } from 'react';
import { Backdrop,ModalWindow } from './Modal.styled';

const modalRoot=document.querySelector('#modal-root');

export default class Modal extends Component{

    

    render(){
    return createPortal(
        <Backdrop>
            <ModalWindow>{this.props.children}</ModalWindow>
        </Backdrop>,
     modalRoot)}
}