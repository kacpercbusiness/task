import { Loader as BaseLoader } from '../../../../components/base/loader/loader';
import { Text } from '../../../../components/base/text/text';

import styles from './details-loader.module.css';

export const DetailsLoader: React.FC = () => (
  <div className={styles.center} role="status" aria-busy="true" aria-live="polite">
    <BaseLoader size="lg" />
    <Text variant="md" className={styles.loadingText}>
      Loading details...
    </Text>
  </div>
);
