import React from 'react';

import { Modal } from './style'

const EditEventModal = (props) => {
        
        return (
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                                <li><h1>Add Event</h1></li>
                            </span>
                            <li><div id='close' onClick={props.closeModal}></div></li>
                        </ul>
                    </header>
                    <form>
                        <label>Event Name: </label>
                        <input type="text" name="event_name" value={props.event_name} placeholder="Megali Idea" />
                        <label>Event Date:</label>
                        <input type="text" name="event_date" value={props.event_date} placeholder="YYYY-DD-MM" />
                        <label>Event Description: </label>
                        <input type="text" name="event_desc" value={props.event_desc} placeholder="event description" />
                        <label>Event Wiki: </label>
                        <input type="text" name="event_wiki" value={props.event_wiki} placeholder="EXACT wikipedia article title" />
                        <label>Event Option: </label>
                        <input type="text" name="event_option" value={props.event_option} placeholder="https://youtu.be/jkGVh102Tlw?t=1428" />
                        <label>Event Thumbnai: </label>
                        <input type="text" name="event_thumbnail" value={props.event_thumbnail} placeholder="image src" />

                        <footer>
                            <button id='submit'><p>Update Event</p></button>
                        </footer>
                    </form>


                </section>
            </Modal>
        )
}


export default EditEventModal