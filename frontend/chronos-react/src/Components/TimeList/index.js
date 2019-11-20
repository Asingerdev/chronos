import React from 'react';

const TimeList = (props) => {
    const timelines = props.timelines.map((timeline) => {
        return (
            <div key={timeline.id}></div>
        )
    })

    return (
        <React.Fragment>
            <h1>Timelines</h1>
            {timelines}
        </React.Fragment>
    )
}

export default TimeList
