import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
const uuidV4 = require('uuid/v4');

const TimersDashboard = React.createClass({
  newTimer: function (attrs = {}) {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: uuid.v4(), // eslint-disable-line no-undef
      elapsed: 0,
    };

    return timer;
  },
  getInitialState: function () {
    return {
      timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidV4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidV4(),
        elapsed: 1273998,
        runningSince: null,
      },
      ],
    };
  },
  handleCreateFormSubmit: function (timer) {
    this.createTimer(timer);
  },
  createTimer: function (timer) {
    const t = this.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  },
  render: function () {
    return (
      <div className='ui three column centered grid'>
      <div className='column'>
      <EditableTimerList
      timers={this.state.timers}
      />
      <ToggleableTimerForm
onFormSubmit={this.handleCreateFormSubmit}
/>
      </div>
      </div>
      );
  },
});

export default TimersDashboard;