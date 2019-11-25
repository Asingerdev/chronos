import React from 'react';
import Column from './style';
import StyleButton from './stylebutton';
import TimeShow from '../TimeShow';
import { Link } from 'react-router-dom'

const TimeList = (props) => {
    const timelines = props.timelines.map((timeline) => {
        return (
            <React.Fragment>
                <div >
                    <h1>Timelines</h1>
                    
                    <Column>
                        <TimeShow timelines={props.timelines} id={timeline.id} />
                        <div key={timeline.id}>
                            <Link to={{
                                    pathname: `/timelines/${timeline.id}`,
                                    
                                }
                            }><h2>{timeline.title}</h2></Link>
                            <img src={timeline.thumbnail} alt={timeline.title} />
                            <h3>{timeline.date_from} to {timeline.date_to}</h3>
                            <StyleButton onClick={() => props.openAndEdit(timeline)}>Edit</StyleButton>
                            <StyleButton onClick={() => props.deleteTimeline(timeline.id)}>Delete</StyleButton>
                        </div>

                    </Column>

                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            {timelines}
            
        </div>
    )
}

export default TimeList
