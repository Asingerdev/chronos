import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainModal from '../Modal/index';

class ModalContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            date_from: '',
            date_to: '',
            thumbnail: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    render() {
        return (
            <main>
                <header>
                    <h1>Create Timeline</h1>
                </header>
                <form onSubmit={(e) => this.props.addTimeline(e, this.state)}>
                    <label>
                        Title:
                            </label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />

                    <label>
                        Date from:
                             </label>
                    <input type='text' name='date_from' value={this.state.date_from} onChange={this.handleChange} placeholder='yyyy-mm-dd' />

                    <label>
                        Date to:
                        </label>
                    <input type='text' name='date_to' value={this.state.date_to} onChange={this.handleChange} placeholder='yyyy-mm-dd' />

                    <label>
                        Thumbnail:
                        </label>
                    <input type='text' name='thumbnail' value={this.state.thumbnail} onChange={this.handleChange} placeholder='url' />
                    <footer>
                        <button id='submit'>Submit</button>
                        <button id='close'>Close</button>
                    </footer>

                </form>

            </main>
        );
    }
}

export default ModalContainer

// < MainModal show = { this.state.show } handleClose = { this.hideModal } >
// </MainModal >

// showModal = () => {
//     this.setState({ show: true });
// };

// hideModal = () => {
//     this.setState({ show: false });
// };