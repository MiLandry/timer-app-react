import React from "react";
// import TimerList from './TimerList';

export default class Timer extends React.Component {
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
      <h2>Mow the lawn </h2>
      <p> 0 </p>
      <button> Start </button>
      </div>
    );
  }
} 
