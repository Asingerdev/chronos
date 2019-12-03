import React, { Component } from 'react';

import AddEventModal from '../AddEventModal';
import EditEventModal from '../EditEventModal';

import { ShowDiv, Image } from './style';

// <Route exact path="/timelines/:id" render={(props) => <TimeShow {...props} />}/

// Each timeline has an array of events
class TimeShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeline: {},
            showAddModal: null,
            showEditModal: null,
            eventToEdit: {
                event_name: '',
                event_date: '',
                date_desc: '',
                event_wiki: '',
                event_option: '',
                event_thumbnail: ''
            },
            events: [],
            summaries: [],
            search: ''
        }

    }

    getTimeline = async () => {
        const timelineId = this.props.match.params.id;
        try {
            const timeline = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/${timelineId}`, {
                credentials: 'include',
                method: "Get",
                "Content-Type": "application/json"
            });
            const parsedTimeline = await timeline.json();
            console.log(parsedTimeline);
            this.setState({
                timeline: parsedTimeline.data.timeline,
                events: parsedTimeline.data.events
            });
        } catch (err) {
            console.log(err);
        }
    }

    getSummary = async () => {
        try {
            const summaries = await fetch(`https://en.wikipedia.org/w/api.php&action=query&list=search&srsearch=${this.state.search}&format=json`)
            const parsedSummaries = await summaries.json();
            console.log(summaries)
        }


        // let url = "https://en.wikipedia.org/w/api.php";

        // const params = {
        //     action: "query",
        //     list: "search",
        //     srsearch: "Nelson Mandela",
        //     format: "json"
        // };

        // url = url + "?origin=*";
        // Object.keys(params).forEach((key) => {
        //     url += "&" + key + "=" + params[key];
        // });

        catch (err) {
            console.log(err);
        }
    }

    // getEvents = async () => {
    //     try {
    //         const events = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/events/`, {
    //             credentials: 'include',
    //             method: "Get",
    //             "Content-Type": "application/json"
    //         });
    //         const parsedEvents = await events.json();
    //         this.setState({
    //             events: parsedEvents.data
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    componentDidMount() {
        this.getTimeline()
        this.getSummary()
    }

    closeAndAdd = async (e, event) => {
        e.preventDefault();
        event.timeline = this.props.match.params.id;
        console.log(event)
        try {

            const createdEventResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/events/`, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(event),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // convert Flask response into object 
            const parsedResponse = await createdEventResponse.json();
            this.setState({
                events: [...this.state.events, parsedResponse.data],
                showAddModal: false
            });
        } catch (err) {
            console.log(err);
        }
    }



    closeAndEdit = async (e) => {
        e.preventDefault();
        try {
            const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/events/${this.state.eventToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.eventToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json();
            const newEventArrayWithEdit = this.state.events.map((event) => {
                if (event.id === editResponseParsed.data.id) {
                    event = editResponseParsed.data
                }
                return event;
            });
            this.setState({
                events: newEventArrayWithEdit,
                showEditModal: false
            });
        } catch (err) {
            console.log(err);
        }
    }

    openAndEdit = (eventFromTheList) => {
        this.setState({
            showEditModal: true,
            eventToEdit: {
                ...eventFromTheList
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditChange = (e) => {
        this.setState({
            eventToEdit: {
                ...this.state.eventToEdit,
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
        return (
            <React.Fragment>
                <ShowDiv>
                    <div>
                        <h1>{this.state.timeline.title}</h1>
                        <h4>Created: {this.state.timeline.created_at}</h4>
                        <button onClick={this.showAddModal}>+ Add Event</button>
                        <h4>Events</h4>
                        <div>
                            <ul>

                                {
                                    this.state.events.map((event) => {
                                        return (<li>
                                            {JSON.stringify(event.event_name)}
                                            <br />
                                            Date: {JSON.stringify(event.event_date)}
                                            <br />
                                            {JSON.stringify(event.event_desc)}
                                            {JSON.stringify(event.event_wiki)}
                                            <br />
                                            <a href={event.event_option}>YouTube Link</a>
                                            <br />
                                            <Image src={event.event_thumbnail} />
                                            <br />
                                            <br />
                                            Event Creation: {JSON.stringify(event.created_at)}
                                        </li>

                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                    <div>

                        <h2>Date From: {this.state.timeline.date_from}</h2>
                        <h2>Date To: {this.state.timeline.date_to}</h2>
                        <Image src={this.state.timeline.thumbnail}></Image>
                    </div>
                    <div>
                        {
                            this.state.showAddModal
                                ?
                                <AddEventModal closeAndAdd={this.closeAndAdd} closeModal={this.closeModal} />
                                :
                                null
                        }
                        {
                            this.state.showEditModal
                                ?
                                <EditEventModal closeAndEdit={this.closeAndEdit} closeModal={this.closeModal} handleEditChange={this.handleEditChange} eventToEdit={this.state.eventToEdit} />
                                :
                                null
                        }

                    </div>

                </ShowDiv>



            </React.Fragment>
        )
    }



};

export default TimeShow;