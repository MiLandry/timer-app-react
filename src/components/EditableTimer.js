import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = React.createClass({
  render: function () {
    if (this.props.editFormOpen) {
      return (
        <TimerForm
        title={this.props.title}
        project={this.props.project}
        />
        );
    } else {
      return (
        <Timer
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince}
        />
        );
    }
  },
});

export default EditableTimer;