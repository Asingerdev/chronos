import React from 'react';
import ReactDOM from 'react-dom';

import { Modal } from './style'

const MainModal = ({ handleClose, show, children }) => {
    const toggleShow = show ? "modal display-block" : "modal display-none";

    return (
        <Modal show={show}>
            <div className={toggleShow}>
                <a href="#" className="close">X</a>
                <section className="modal-main">
                    {children}
                </section>
            </div>
        </Modal>
    )
}

export default MainModal