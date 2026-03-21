import { Text } from '../../../../components/base/text/text';

import styles from './company-info-error.module.css';

import type { FC } from 'react';

type CompanyInfoErrorProps = {
  message: string;
};

export const CompanyInfoError: FC<CompanyInfoErrorProps> = ({ message }) => (
  <div className={styles.errorContainer} role="alert" aria-live="assertive">
    <Text variant="sm" className={styles.errorText}>
      {message}
    </Text>
  </div>
);
