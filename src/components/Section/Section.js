import styles from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={styles.Feedback__title}>
                {title}
            </h2>
            {children}
        </section>
    );
};

export default Section;
