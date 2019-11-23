import React from 'react';

import { Modal } from './style'

const EditModal = (props) => {
    return (
        <Modal>
            <section>
                <header>
                    <ul>
                        <span>
                            <li><h1>Edit Timeline</h1></li>
                        </span>
                        <li><div id='close' onClick={props.closeModal}></div></li>
                    </ul>
                </header>
                <form onSubmit={props.closeAndEdit}>
                    <label>
                        Title:
                            </label>
                    <input type='text' name='title' value={props.timelineToEdit.title} onChange={props.handleEditChange} />

                    <label>
                        Date from:
                             </label>
                    <input type='text' name='date_from' value={props.timelineToEdit.date_from} onChange={props.handleEditChange} placeholder='yyyy-mm-dd' />

                    <label>
                        Date to:
                        </label>
                    <input type='text' name='date_to' value={props.timelineToEdit.date_to} onChange={props.handleEditChange} placeholder='yyyy-mm-dd' />

                    <label>
                        Thumbnail:
                        </label>
                    <input type='text' name='thumbnail' value={props.timelineToEdit.thumbnail} onChange={props.handleEditChange} placeholder='url' />
                    <footer>
                        <button id='submit'><p>Submit Changes</p></button>
                    </footer>
                </form>
            </section>
        </Modal>
    )
}


export default EditModal