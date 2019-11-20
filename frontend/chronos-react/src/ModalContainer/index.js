import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal';

class ModalContainer extends Component {
    state = { show: true };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1>Create Timeline</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>I am a modal</p>
                </Modal>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>modal two</p>
                </Modal>
            </main>
        );
    }
}

export default ModalContainer