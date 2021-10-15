import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = option => {
        this.setState(state => {
            return {
                [option]: state[option] + 1,
            }
        });
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div className={styles.Feedback}>
                <h2 className={styles.Feedback__title}>
                    Please leave feedback
                </h2>

                <div className={styles.Counter}>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </div>

                <div className={styles.Statistics}>
                    <h2 className={styles.Stat__title}>
                        Statistics
                    </h2>
                </div>
                
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    />
            </div>
        );
    }
}

export default Feedback;