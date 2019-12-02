import React, { Component } from 'react';
import TimeList from '../TimeList'
import AddModal from '../AddModal'
import EditModal from '../EditModal'


import Button from './style'


class TimeContainer extends Component {
    constructor() {
        super();

        this.state = {
            timelines: [],
            loggedUser: false,
            showAddModal: null,
            showEditModal: null,
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
        try {
            const timelines = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/`, {
                credentials: 'include',
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsedTimelines = await timelines.json();
            this.setState({
                timelines: parsedTimelines.data
            });
        } catch (err) {
            console.log(err);
        }
    }
    closeAndAdd = async (e, timeline) => {
        e.preventDefault();
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
            // convert Flask response into object 
            const parsedResponse = await createdTimelineResponse.json();
            this.setState({
                timelines: [...this.state.timelines, parsedResponse.data],
                showAddModal: false
            });
        } catch (err) {
            console.log(err);
        }
    }
    deleteTimeline = async (id) => {
        const deleteTimelineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        // parsed response from timeline
        const deleteTimelineParsed = await deleteTimelineResponse.json();
        // after removing from db, delete specific timeline from state
        this.setState({
            timelines: this.state.timelines.filter((timeline) => timeline.id !== id)
        });
    }
    closeAndEdit = async (e) => {
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
            const newTimelineArrayWithEdit = this.state.timelines.map((timeline) => {
                if (timeline.id === editResponseParsed.data.id) {
                    timeline = editResponseParsed.data
                }
                return timeline;
            });
            this.setState({
                timelines: newTimelineArrayWithEdit,
                showEditModal: false
            });
        } catch (err) {
            console.log(err);
        }
    }
    openAndEdit = (timelineFromTheList) => {
        this.setState({
            showEditModal: true,
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
    showAddModal = () => {
        this.setState({
            showAddModal: true
        })
    }
    closeModal = () => {
        this.setState({
            showAddModal: false,
            showEditModal: false
        })
    }

    render() {
        console.log(this.state.timelines, 'this is timeline list')
        return (
            <React.Fragment>
                {
                    this.state.showAddModal
                        ?
                        <AddModal closeAndAdd={this.closeAndAdd} closeModal={this.closeModal} />
                        :
                        null
                }
                {
                    this.state.showEditModal
                        ?
                        <EditModal closeAndEdit={this.closeAndEdit} closeModal={this.closeModal} handleEditChange={this.handleEditChange} timelineToEdit={this.state.timelineToEdit} />
                        :
                        null
                }
                <Button onClick={this.showAddModal}>+ Add Timeline</Button>
                <TimeList timelines={this.state.timelines} openAndEdit={this.openAndEdit} deleteTimeline={this.deleteTimeline} />
            </React.Fragment>
        )
    }
}

export default TimeContainer;