import React, { Component } from 'react'
import EventCollection from './EventCollection'
export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Historic Fashion Activisim</h1>
                <EventCollection />
            </div>
        )
    }
}

export default Home
