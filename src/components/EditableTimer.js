import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = React.createClass({
  getInitialState: function () {
return {
editFormOpen: false,
};
},
  render: function () {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        />
        );
    } else {
      return (
        <Timer
        id={this.props.id}
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