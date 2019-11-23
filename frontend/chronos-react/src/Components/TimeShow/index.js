import React from 'react';
import TimeShow from './TimeShow';
// import ModalContainer from './ModalContainer';

import { ShowDiv, Image } from './style';

// <Route exact path="/timelines/:id" render={(props) => <TimeShow {...props} />}/

// Each timeline has an array of events
const TimeShow = (props) => {

    // May need to pass props from TimeList

    const foundTimeline = props.timelines.filter((timeline) => timeline.timeline_id !== params.timeline_id);

    const eventsList = foundTimeline.events.map((event, i) => {


        return (
            <div>
                <ShowDiv />
                <div key={i} >
                    <Image />
                    <img src={event.event_thumbnail} alt={event.event_name} />
                    <h3>{event.event_date}</h3>
                    <p>{event.event_desc}</p>
                    {/* Event - Edit route component goes here */}
                    {/* Event - Delete route component */}
                </div>
            </div>
        )




    }); // end foundTimeline.events.map

    // We will need to idiomatically pass down props from HomeContainer, to TimeList,
    // all the way down to this TimeShow.

    return (
        <React.Fragment>
            <h1>{foundTimeline.title}</h1>
            <h2>{foundTimeline.date_from}</h2>
            <h2>{foundTimeline.date_to}</h2>

            <button onClick={() => props.openAndEdit(foundTimeline)} >Edit Timeline</button>
            button
            <button onClick={() => props.deleteTimeline(foundTimeline.timeline_id)} >Delete Timeline</button>
            {eventsList}

        </React.Fragment>
    )


};

export default TimeShow;