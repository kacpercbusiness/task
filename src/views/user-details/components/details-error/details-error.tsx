import { Text } from '../../../../components/base/text/text';

import styles from './details-error.module.css';

type DetailsErrorProps = {
  message: string;
  onBack: () => void;
};

export const DetailsError: React.FC<DetailsErrorProps> = ({ message, onBack }) => (
  <div className={styles.center} role="alert" aria-live="assertive">
    <Text variant="lg" className={styles.errorText} id="details-error-message">
      {message}
    </Text>
    <button type="button" onClick={onBack} className={styles.backButton} aria-label="Return to user selection">
      Back to Users
    </button>
  </div>
);
