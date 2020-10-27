import React from 'react';
import Card from './Card';
import './Modal.css';

type Props = {
    closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, closeModal }) => (
    <div className="Modal" onClick={closeModal} >
        <div className="ModalContent">
            <Card>
                {children}
            </Card>
        </div>
    </div>
)

export default Modal;