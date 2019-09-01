import React, { Component } from 'react'
import EventForm from './EventForm'

export class UserEvents extends Component {
    render() {
        return (
            <div className="user-events">
                <h2>Your Events</h2>
                <EventForm />
            </div>
        )
    }
}

export default UserEvents
