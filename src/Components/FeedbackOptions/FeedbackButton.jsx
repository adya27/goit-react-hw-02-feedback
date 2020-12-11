import styles from "./FeedbackButton.module.css";

function FeedbackButton(prop) {
  return (
    <button
      className={styles.FeedbackButton}
      type="button"
      onClick={prop.handle}
    >
      {prop.btnName}
    </button>
  );
}

export default FeedbackButton;
