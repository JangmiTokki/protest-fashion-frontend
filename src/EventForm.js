import React, { Component } from 'react'

export class EventForm extends Component {
    
    state = {
        title: "",
        picture: "",
        date: "",
        location: ""
    }
    
    createEvent = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
      }
    render() {
      const { title, picture, date, location} = this.state
        return (

            <div className="event-form">
                <p>Enter the event's name: </p>
                <input 
                    placeholder="Event"
                    type="text"
                    name="title"
                    value= {title} 
                    onchange= {this.createEvent}
                />
                <p>Enter a url for the picture: </p>
                <input 
                    placeholder="URL"
                    type="text"
                    name="picture"
                    value={picture}
                    onchange= {this.createEvent}
                />
                <p>Enter the event's date: </p>
                <input 
                    type="date"
                    name="date"
                    value={date}
                    onchange={this.createEvent}
                />
                <p>Enter the event's location:</p>
                <input 
                    type="text" 
                    name="location"
                    placeholder="Location"
                    value={location}
                    onchange={this.createEvent}
                />
                <input 
                    type="submit" 
                />
            </div>
        )
    }
}

export default EventForm
