import React, { Component } from 'react';
import image from 'images/feedback.jpeg';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styles from 'components/App/App.module.css';
import Container from './Container/Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = category => {
    this.setState({ [category]: this.state[category] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    //eсли без проверки NaN
    return total ? Math.ceil((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1 className={styles.title}>Please Leave Your</h1>
        <img className={styles.image} src={image} alt="Feedback" />
        <FeedbackOptions
          categories={['good', 'neutral', 'bad']}
          onClickBtn={this.onClickBtn}
        />

        <Section title="Statistics">
          {/*  блок Statistics рендерился только после того, как был собран хотя бы один отзыв */}
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
