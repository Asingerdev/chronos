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
                    <header>
                        <h1>Create Timeline</h1>
                    </header>
                    <form>
                        <label>
                            Title:
                            </label>
                        <input type="text" />

                        <label>
                            Date from:
                             </label>
                        <input type="date" />

                        <label>
                            Date to:
                        </label>
                        <input type="date" />

                        <label>
                            Thumbnail:
                        </label>
                        <input type="text" placeholder="url" />

                    </form>
                    <footer>
                        <button onClick={() => this.props.addTimeline()} id="submit">Submit</button>
                        <button id="close">Close</button>
                    </footer>
                </MainModal>
            </main>
        );
    }
}

export default ModalContainer