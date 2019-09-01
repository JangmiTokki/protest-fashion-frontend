import React, { Component } from 'react'
import Event from './Event'
export class EventCollection extends Component {
    
    state = {
        events : [],
	    hype : 0,
	    userEvents: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/events")
        .then(res => res.json())
        .then(data => this.setState({
            events: data
        }))
    }

	addEvents = (userEvent) => {
		const { userEvents } = this.state
		const newEvent = {...userEvents}

		this.setState({
		userEvents: [...userEvents, newEvent]
		})
	}

	

    render() {
        const events = this.state.events.map(event => {
            return <Event events={event} hype={this.state.hype}/>
        })
        return (
            <div className="EventCollection">
                {events}
            </div>
        )
    }
}

export default EventCollection

