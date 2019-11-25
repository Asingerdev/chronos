import React, { Component } from 'react';

import AddEventModal from '../AddEventModal';
import EditEventModal from '../EditEventModal';

import { ShowDiv, Image } from './style';
import StyleButton from './stylebutton';

// <Route exact path="/timelines/:id" render={(props) => <TimeShow {...props} />}/

// Each timeline has an array of events
class TimeShow extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timeline : {}
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
            this.setState({
                timeline: parsedTimeline.data
            });
        } catch (err) {
            console.log(err);
        }
    }
 
    componentDidMount() {
        this.getTimeline()
    }

    
    // console.log(props.location)
    // const timelineId = props.match.params.id
    // const timelineId = props.match.params.id
    // console.log(timelineId, " props.match.params.id")
    
    // May need to pass props from TimeList
    // We need to pass down the props to get the modals to show and hide

    // const theTimeline = props.timeline;
    // console.log(theTimeline, " all of the timelines");
    

    // const foundTimeline = allTimelines.filter( timeline => timeline.id !== timeline.timelineId );
    // console.log(foundTimeline, " this is the foundTimeline");
    // const selectedTimeline = foundTimeline[0];
    // console.log(selectedTimeline, " <= get the 0 index timeline");
    
    

    // const eventsList = selectedTimeline.events;

    // We will need to idiomatically pass down props from HomeContainer, to TimeList,
    // all the way down to this TimeShow.
    render() {
        return (
        <React.Fragment>
            <h1>{this.state.timeline.title}</h1>
        <h2>Date From: {this.state.timeline.date_from}</h2>
        <h2>Date To: {this.state.timeline.date_to}</h2>
        <img src={this.state.timeline.thumbnail}></img>
        </React.Fragment>
        )
    }
   


};

export default TimeShow;