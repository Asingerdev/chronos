import React from 'react';

import { Modal } from './style'

const DeleteModal = (props) => {
    return (
        <Modal>
            <section>
                <header>
                    <ul>
                        <span>
                            <li><h1>Delete Timeline</h1></li>
                        </span>
                        <li><div id='close' onClick={props.closeModal}></div></li>
                    </ul>
                </header>
                    <p>Are you sure you want to delete this Timeline?</p>

                    <footer>
                        <button onClick={ () =>  props.deleteTimeline(props.timeline.id)  } id='submit'><p>Delete Timeline</p></button>
                    </footer>
                
            </section>
        </Modal>
    )
}


export default DeleteModal