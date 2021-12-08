import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import image from 'images/feedback.jpeg';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // eсли нужно изменить state делаем это через метод setState()
  onClickBtn = category => {
    this.setState({ [category]: this.state[category] + 1 });
  };

  coutnTotal = () => {
    const { good, neutral, bad } = this.state;
    //получаю данные состояния
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {/* Section start */}
        <h1 className="title">Please leave your feedback</h1>
        <img src={image} alt="Feedback" />
        {/* Section end */}

        <FeedbackOptions
          categories={['good', 'neutral', 'bad']}
          onClickBtn={this.onClickBtn} //cсылка на ф-цию
        />
        <h2 className="title">Statistics</h2>

        {/* диструктуризация строка 19*/}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.coutnTotal()} //результат вызова
        />
      </div>
    );
  }
}

export default App;
