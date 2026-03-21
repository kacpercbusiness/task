import React from 'react';

import { Text } from '../../../../components/base/text/text';
import { Tile } from '../../../../components/base/tile/tile';
import { CompanyFeatures } from '../company-features/company-features';
import { CompanyUsers } from '../company-users/company-users';

import styles from './company-details.module.css';

import type { Company } from '../../../../services/companies/types';
import type { CompanyUser } from '../../utils/get-company-users';

type CompanyDetailsProps = {
  company: Company;
  users: CompanyUser[];
  children: React.ReactNode;
};

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  company,
  children,
  users,
}) =>{
  return (
  <Tile padding="lg" className={styles.companyTile}>
    <div className={styles.companyHeader}>
      <Text as="h3" variant="lg" weight="bold">
        {company.name}
      </Text>
    </div>

    <CompanyUsers users={users} />

    <CompanyFeatures>{children}</CompanyFeatures>
  </Tile>
);};
