import { EmptyDataIllustration } from "./EmptyDataIllustration";
import styles from "./EmptyState.module.css";

const EmptyState = ({ headerTitle, displayText }) => {
  return (
    <div className={styles.emptyStateWrapper}>
      <h2 className={styles.headerTitle}>{headerTitle}</h2>
      <EmptyDataIllustration/>
      <p className={styles.content}>
          There is no {displayText.toLowerCase()} to display at the moment
      </p>
    </div>
  );
};

export default EmptyState;
