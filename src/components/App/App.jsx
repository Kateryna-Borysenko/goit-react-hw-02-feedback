import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        {/* Section start */}
        <h1 className="title">Please leave your feedback</h1>
        {/* Section end */}

        {/* Counter start */}
        <div className="counterControls">
          <button className="counterControlsBtn" type="button">
            Good
          </button>
          <button className="counterControlsBtn" type="button">
            Neutral
          </button>
          <button className="counterControlsBtn" type="button">
            Bad
          </button>
        </div>
        {/* Counter end */}

        {/* Statistics start */}
        <h2 className="title">Statistics</h2>

        {/* Statistics start */}
        <div className="statistics">
          <p className="goodFeedback">
            Good: <span>?</span>
          </p>
          <p className="goodFeedback">
            Neutral: <span>?</span>
          </p>
          <p className="goodFeedback">
            Bad: <span>?</span>
          </p>

          <p className="positiveFeedback">
            Positive feedback: <span>? %</span>
          </p>
        </div>
        {/* Statistics end */}
        {/* Statistics end */}
      </div>
    );
  }
}

export default App;
