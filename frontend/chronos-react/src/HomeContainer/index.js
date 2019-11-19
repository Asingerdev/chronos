import React, { Component } from 'react';

class HomeContainer extends Component {
    constructor() {
        super();

        this.state = {
            timelines: [],
            loggedUser: false
        }

       
    }

    componentDidMount() {
        this.getTimelines();
    }
    getTimelines = async () => {

        try {
        
            const timelines = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines`, {
                credentials: 'include',
                method: "Get"
            });

            const parsedTimelines = await timelines.json();
            console.log(parsedTimelines);
            
            this.setState({
                // MAY need to change data property here
                timelines: parsedTimelines.data
            });
 
        } catch (err) {
            console.log(err);
        }

    }
    addTimeline = async (e, timeline) => {
        e.preventDefault(); 
        console.log(timeline);

        try {
            // createdTimelineResponse stores response from Flask API
            const createdTimelineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(timeline),
                headers: {
                    'content-type': 'application/json'
                }
            });

            // convert Flask response into object we can use
            const parsedResponse = await createdTimelineResponse.json();
            console.log(parsedResponse, ' <= parsedResponse');

            this.setState({
                timelines: [...this.state.timelines, parsedResponse.data]
            });


        } catch (err) {
            console.log('error');
            console.log(err);
        }

    }
    deleteTimeline = async (id) => {

        console.log(id);
        const deleteTimelineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines`, {
                                                            method: 'DELETE',
                                                            credentials: 'include'
        });

        // parsed response from timeline
        const deleteTimelineParsed = await deleteTimelineResponse.json();
        console.log(deleteTimelineResponse);

        // after removing from db, delete specific timeline from state
        this.setState({
            timelines: this.state.timelines.filter( (timeline) => timeline.id != id )
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
                showEditModal: false,
                timelines: newTimelineArrayWithEdit
            });
            
        } catch (err) {
            console.log(err);
        }
     
        
    }

    openAndEdit = (timelineFromTheList) => {
        console.log(timelineFromTheList, " timeline to edit");


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
                [e.currentTarget.title]: e.currentTarget.value
            }
        });
    }
    

}