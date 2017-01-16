import React from "react";

export default class TimerForm extends React.Component {
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
        <form>
        <label>Title</label>
          <input type="text"></input>
        <label>Title</label>
          <input type="text"></input>
        </form>
        <button>Update</button>
        <button>Cancel</button>

      </div>
    );
  }
} 
