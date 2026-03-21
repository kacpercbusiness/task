import { Loader as BaseLoader } from '../../../../components/base/loader/loader';
import { Text } from '../../../../components/base/text/text';

import styles from './users-loader.module.css';

export const UsersLoader: React.FC = () => (
  <div className={styles.center} role="status" aria-busy="true" aria-live="polite">
    <BaseLoader size="lg" />
    <Text variant="md" className={styles.loadingText}>
      Loading users...
    </Text>
  </div>
);
