import { Text } from '../../../../components/base/text/text';

import styles from './users-error.module.css';

type UsersErrorProps = {
  message: string;
  onBack: () => void;
};

export const UsersError: React.FC<UsersErrorProps> = ({ message, onBack }) => (
  <div className={styles.center} role="alert" aria-live="assertive">
    <Text variant="lg" className={styles.errorText} id="users-error-message">
      {message}
    </Text>
    <button type="button" onClick={onBack} className={styles.backButton} aria-label="Return to home">
      Back to Home
    </button>
  </div>
);
