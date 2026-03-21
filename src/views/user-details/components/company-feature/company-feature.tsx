import { CompanyInfo } from 'src/features/company-info/company-info';
import { Kittens } from 'src/features/kittens/kittens';
import { RandomNumber } from 'src/features/random-number/random-number';

import { Text } from '../../../../components/base/text/text';
import { getFeatureLabel } from '../../../../features/utils/get-feature-label';

import styles from './company-feature.module.css';

import type { CompanyFeature as CompanyFeatureType } from 'src/services/companies/types';

type CompanyFeatureProps = {
  featureId: CompanyFeatureType;
  userId?: string;
};

export const CompanyFeature: React.FC<CompanyFeatureProps> = ({ featureId, userId = '' }) => {
  const featureLabel = getFeatureLabel(featureId);
  const labelId = `feature-${featureId}-${userId || 'default'}`;

  return (
    <article className={styles.featureItem} aria-labelledby={labelId}>
      <Text as="h3" variant="xs" weight="bold" id={labelId} className={styles.featureLabel}>
        {featureLabel}
      </Text>

      {featureId === 'kittens' && <Kittens />}
      {featureId === 'random-number' && <RandomNumber />}
      {featureId === 'company' && <CompanyInfo userId={userId} />}
    </article>
  );
};
