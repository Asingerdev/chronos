import React from 'react';
import { TimeListStyle, Column } from './style';

const TimeList = (props) => {
    const timelines = props.timelines.map((timeline) => {
        return (
            <div key={timeline.timeline_id}>
                
            </div>
        )
    })

    return (
        <div>
            <Column />
            <h1>Timelines</h1>
            {timelines}
        </div>
    )
}

export default TimeList
