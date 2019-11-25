import React from 'react';

import AddEventModal from '../AddEventModal';
import EditEventModal from '../EditEventModal';

import { ShowDiv, Image } from './style';
import StyleButton from './stylebutton';

// <Route exact path="/timelines/:id" render={(props) => <TimeShow {...props} />}/

// Each timeline has an array of events
const TimeShow = (props) => {
    console.log(props, " the props")
    // const timelineId = props.match.params.id
    const timelineId = props.id
    console.log(timelineId, " props.id")
    
    // May need to pass props from TimeList
    // We need to pass down the props to get the modals to show and hide

    const allTimelines = props.timelines;
    console.log(allTimelines, " all of the timelines");
    

    const foundTimeline = allTimelines.filter( timeline => timeline.id !== timeline.timelineId );
    console.log(foundTimeline, " this is the foundTimeline");
    const selectedTimeline = foundTimeline[0];
    console.log(selectedTimeline, " <= get the 0 index timeline");
    
    

    // const eventsList = selectedTimeline.events.map((event, i) => {


    //     return (
    //         <div>
    //             <ShowDiv>
    //                 <div key={i} >
                        
    //                     <Image src={event.event_thumbnail} alt={event.event_name} />
    //                     <h3>{event.event_date}</h3>
    //                     <p>{event.event_desc}</p>
    //                     <Image src={event.event_thumbnail} />
    //                 </div>
    //             </ShowDiv>    
    //         </div>
    //     )




    // }); // end foundTimeline.events.map

    // We will need to idiomatically pass down props from HomeContainer, to TimeList,
    // all the way down to this TimeShow.

    return (
        <React.Fragment>
            {/* {eventsList}

            <button onClick={() => props.openAndEdit(foundTimeline)} >Edit Timeline</button>
            button
            <button onClick={() => props.deleteTimeline(foundTimeline.timeline_id)} >Delete Timeline</button>
            {eventsList}  */}

        </React.Fragment>
    )


};

export default TimeShow;