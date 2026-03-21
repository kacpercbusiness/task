import { Text } from '../../../../components/base/text/text';

import styles from './assigned-companies.module.css';

import type { FC, ReactNode } from 'react';

type AssignedCompaniesProps = {
  isEmpty: boolean;
  children: ReactNode;
};

export const AssignedCompanies: FC<AssignedCompaniesProps> = ({
  isEmpty,
  children,
}) => (
  <section className={styles.companiesSection} aria-labelledby="features-heading" aria-describedby={isEmpty ? 'features-empty' : undefined}>
    <Text as="h2" id="features-heading" variant="xl" weight="bold" className={styles.sectionTitle}>
      Features
    </Text>

    {isEmpty ? (
      <Text variant="md" id="features-empty">No features available for this user.</Text>
    ) : (
      children
    )}
  </section>
);
