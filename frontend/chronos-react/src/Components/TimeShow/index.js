import React from 'react';
import TimeShow from './TimeShow';

// <Route exact path="/timelines/:id" render={(props) => <TimeShow {...props} />}/

// Each timeline has an array of events
const TimeShow = (props) => {
    
    // May need to pass props from TimeList

    const foundTimeline = props.timelines.filter( (timeline) => timeline.timeline_id !== params.timeline_id);

    const eventsList = foundTimeline.events.map( (event, i) => {
        
        
        return (
            <div>
                <div key={i} >
                    <img src={event.event_thumbnail} alt={event.event_name} />
                    <h3>{event.event_date}</h3>
                    <p>{event.event_desc}</p>
                </div>
            </div>
        )


        
    
    }); // end foundTimeline.events.map

    return (
        <React.Fragment>
            <h1>{foundTimeline.title}</h1>
            <h2>{foundTimeline.date_from}</h2>
            <h2>{foundTimeline.date_to}</h2>
            {eventsList}

        </React.Fragment>
    )


};

export default TimeShow;