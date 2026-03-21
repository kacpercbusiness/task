import React from 'react';

import { Text } from '../../../../components/base/text/text';

import styles from './company-features.module.css';

type CompanyFeaturesProps = {
  children: React.ReactNode;
};

export const CompanyFeatures: React.FC<CompanyFeaturesProps> = ({ children }) => (
  <div className={styles.featuresSection}>
    <Text variant="sm" weight="bold" className={styles.featuresTitle}>
      Available Features:
    </Text>
    {children}
  </div>
);
