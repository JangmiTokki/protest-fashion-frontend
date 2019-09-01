import React from 'react'

export default function Event(props) {

    return (
        <div>
            <div className="event">
                <img src={props.events.picture} alt={props.events.title}/>
                <div className="event-body">
                        <h4>{props.events.title}</h4>
                        <p>Date: {props.events.event_date}</p>
                        <p>Location: {props.events.location}</p>
                        <button className="hype">Hype</button> {props.hype}
                </div>
            </div>
        </div>
    )
}
