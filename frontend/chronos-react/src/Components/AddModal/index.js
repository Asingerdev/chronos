import React, { Component } from 'react';

import { Modal } from './style'

class AddModal extends Component {
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
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                             <li><h1>Add Timeline</h1></li>
                            </span>
                            <li><div id='close' onClick={this.props.closeModal}></div></li>
                        </ul>
                    </header>
                    <form onSubmit={(e) => this.props.closeAndAdd(e, this.state)}>
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
                            <button id='submit'><p>Create Timeline</p></button>
                        </footer>
                    </form>
                </section>
            </Modal>
        )
    }
}

export default AddModal