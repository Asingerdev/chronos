import React from 'react';
import { Column, Image } from './style';

const TimeList = (props) => {
    const timelines = props.timelines.map((timeline) => {
        return (
            <div key={timeline.timeline_id}>
                <Column />
                <Image />
                <div>
                    <h2>{timeline.title}</h2>
                    <img src={timeline.thumbnail} alt={timeline.title} />
                    <h3>{timeline.date_from} to {timeline.date_to}</h3>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Timelines</h1>
            {timelines}
        </div>
    )
}

export default TimeList
