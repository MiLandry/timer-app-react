import React from "react";
// import TimerList from './TimerList';

export default class TimerList extends React.Component {
  constructor() {
    super();
    this.name = "Mike";
    this.state = {
      clicks: 0
    };

  }


  render() {
    return (
      <div>
      I R timer list
      </div>
    );
  }
} 
