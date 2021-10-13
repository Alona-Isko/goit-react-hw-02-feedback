import React from 'react';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        valueGood: 0,
        valueNeutral: 0,
        valueBad: 0,
    };

    incrementGood = () => {
        this.setState(currentValue => {
            return {
                valueGood: currentValue.valueGood + 1,
            }
        });
    };

    incrementNeutral = () => {
        this.setState(currentValue => {
            return {
                valueNeutral: currentValue.valueNeutral + 1,
            }
        });
    };

    incrementBad = () => {
        this.setState(currentValue => {
            return {
                valueBad: currentValue.valueBad + 1,
            }
        });
    };
    
    render() {
        return (
            <div className={styles.Feedback}>
                <h2 className={styles.Feedback__title}>
                    Please leave feedback
                </h2>
                <div className={styles.Counter}>
                    <div className="Counter__controls">
                        <button type="button" onClick={this.incrementGood}>
                            Good</button>
                        <button type="button" onClick={this.incrementNeutral}>
                            Neutral</button>
                        <button type="button" onClick={this.incrementBad}>
                            Bad</button>
                    </div>
                </div>

                <div className={styles.Statistics}>
                    <h2 className={styles.Feedback__title}>
                        Statistics
                    </h2>
                    <p className={styles.Statistics__value}>Good: {this.state.valueGood}</p>
                    <p className={styles.Statistics__value}>Neutral: {this.state.valueNeutral}</p>
                    <p className={styles.Statistics__value}>Bad: {this.state.valueBad}</p>
                </div>
            </div>
        );
    }
}

export default Feedback;