import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerDashboard from './TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
Im a timer.
timer dash board
<TimerDashboard />
      </div>
    );
  }
}

export default App;
