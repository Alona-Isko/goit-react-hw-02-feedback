import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={styles.Stat__cont}>
        <li className={styles.Stat__value}>Good: {good}</li>
        <li className={styles.Stat__value}>Neutral: {neutral}</li>
        <li className={styles.Stat__value}>Bad: {bad}</li>
        <li className={styles.Stat__value}>Total: {total}</li>
        <li className={styles.Stat__value}>Positive feedback: {positivePercentage}%</li>
    </ul>
);

export default Statistics;