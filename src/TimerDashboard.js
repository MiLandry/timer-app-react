import React from "react";
import TimerList from './TimerList';

export default class TimerDashboard extends React.Component {
  constructor() {
    super();
    this.name = "Mike";
    this.state = {
      clicks: 0
    };
    // this.increment = this.increment.bind(this);
  }


  render() {
    return (
      <div>
      <TimerList />
      </div>
    );
  }
} 
