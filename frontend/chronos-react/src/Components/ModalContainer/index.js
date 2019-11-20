import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainModal from '../Modal/index';

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
                <MainModal show={this.state.show} handleClose={this.hideModal}>
                    <h1>Create Timeline</h1>
                    <form>
                        <label>
                            Title:
                            <input type="text"></input>
                        </label>
                        <label>
                            Date from:
                            <input type="date" ></input>
                        </label>
                        <label>
                            Date to:
                            <input type="date"></input>
                        </label>
                    </form>
                </MainModal>
            </main>
        );
    }
}

export default ModalContainer