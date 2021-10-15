import styles from './Notification.module.css';

function Notification({ message }) {
    return <p className={styles.Stat__message}>
        {message}
    </p>;
};

export default Notification;