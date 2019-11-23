import React from 'react';
import Column from './style';
import StyleButton from './stylebutton';

const TimeList = (props) => {
    const timelines = props.timelines.map((timeline) => {
        return (
            <React.Fragment>
                <div >
                    <h1>Timelines</h1>
                    <Column>
                        
                        <div key={timeline.timeline_id}>
                            <h2>{timeline.title}</h2>
                            <img src={timeline.thumbnail} alt={timeline.title} />
                            <h3>{timeline.date_from} to {timeline.date_to}</h3>
                            <StyleButton onClick={ () => props.openAndEdit(timeline) }>Edit</StyleButton>
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
