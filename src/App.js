import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import UserEvents from './UserEvents'
import './App.css';

function App() {
  return (
    <div className="App">
   
     <Router>
        <div className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/your-events">Your Events</Link>
        <span className="title">Challenge Trends</span>
        </div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/your-events/" component={UserEvents} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
