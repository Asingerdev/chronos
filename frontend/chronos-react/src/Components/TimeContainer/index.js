import React, { Component } from 'react';
import TimeList from '../TimeList'
import AddModal from '../AddModal'
import EditModal from '../EditModal'
import DeleteModal from '../DeleteModal'

import Button from './style'


class TimeContainer extends Component {
    constructor() {
        super();

        this.state = {
            timelines: [],
            loggedUser: false,
            showModal: null,
            timelineToEdit: {
                title: '',
                date_from: '',
                date_to: '',
                thumbnail: ''              
            }
        }
    }
    componentDidMount() {
        this.getTimelines();
    }
    getTimelines = async () => {
        console.log('hit')
        try {
            const timelines = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/`, {
                credentials: 'include',
                method: "Get",
                "Content-Type": "application/json"
            });
            const parsedTimelines = await timelines.json();
            console.log(parsedTimelines, 'this is from API call');

            this.setState({
                // MAY need to change data property here
                timelines: parsedTimelines.data
            });

        } catch (err) {
            console.log(err);
        }

    }
    closeAndAdd = async (e, timeline) => {
        e.preventDefault();
        console.log(timeline);

        try {
            // createdTimelineResponse stores response from Flask API
            const createdTimelineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/`, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(timeline),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // convert Flask response into object we can use
            const parsedResponse = await createdTimelineResponse.json();
            console.log(parsedResponse, ' <= parsedResponse');

            this.setState({
                timelines: [...this.state.timelines, parsedResponse.data]
            });
            this.closeModal();
        } catch (err) {
            console.log('error');
            console.log(err);
        }

    }
    deleteTimeline = async (id) => {

        console.log(id);
        const deleteTimelineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        // parsed response from timeline
        const deleteTimelineParsed = await deleteTimelineResponse.json();
        console.log(deleteTimelineResponse);

        // after removing from db, delete specific timeline from state
        this.setState({
            timelines: this.state.timelines.filter((timeline) => timeline.id !== id)
        });

        console.log(deleteTimelineParsed, ' <= response from Flask server');
    }
    closeAndEdit = async (e) => {
        // put request, then update state
        e.preventDefault();

        try {

            const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/${this.state.timelineToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.timelineToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const editResponseParsed = await editResponse.json();
            console.log(editResponseParsed, " parsed edit");

            const newTimelineArrayWithEdit = this.state.timelines.map((timeline) => {

                if (timeline.id === editResponseParsed.data.id) {
                    timeline = editResponseParsed.data
                }

                return timeline;

            });

            this.setState({
                showModal: false,
                timelines: newTimelineArrayWithEdit
            });

        } catch (err) {
            console.log(err);
        }
    }
    openAndEdit = (timelineFromTheList) => {
        console.log(timelineFromTheList, " timeline to edit");
        this.setState({
            showModal: true,
            timelineToEdit: {
                ...timelineFromTheList
            }
        })

    }
    handleEditChange = (e) => {

        this.setState({
            timelineToEdit: {
                ...this.state.timelineToEdit,
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        console.log(this.state.timelines, 'this is timeline list')
        return (

            <React.Fragment>
                    
               {
                   this.state.showModal
                      ?
                        <AddModal closeAndAdd={this.closeAndAdd} closeModal={this.closeModal} />
                       :
                    null
               }
               {
                   this.state.showModal
                      ?
                       <EditModal openAndEdit={this.openAndEdit} closeAndEdit={this.closeAndEdit} handleEditChange={this.handleEditChange} closeModal={this.closeModal} timelineToEdit={this.state.timelineToEdit} />
                       :
                    null
               }
               

               <Button onClick={this.showModal}>+ Add Timeline</Button>
                <TimeList timelines={this.state.timelines} openAndEdit={this.openAndEdit} closeAndEdit={this.closeAndEdit} deleteTimeline={this.deleteTimeline} showModal={this.showModal} />
            </React.Fragment>
        )
    }
}

export default TimeContainer;