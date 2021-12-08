import React, { Component } from 'react';
import image from 'images/feedback.jpeg';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styles from 'components/App/App.module.css';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    //получаю данные состояния
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good; //
    //Math.ceil()-> округление до большего целого
    //eсли total -> есть то считаем, если ничего не выбрано значение 0 без проверки NaN
    return total ? Math.ceil((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Please Leave Your</h1>
        <img className={styles.image} src={image} alt="Feedback" />

        <FeedbackOptions
          categories={['good', 'neutral', 'bad']}
          onClickBtn={this.onClickBtn} //cсылка на ф-цию
        />

        <Section title="Statistics">
          {/* диструктуризация строка 19*/}

          {/*  блок Statistics рендерился только после того, как был собран хотя бы один отзыв */}
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()} //результат вызова
              percentage={this.countPositiveFeedbackPercentage()} //результат вызова
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
