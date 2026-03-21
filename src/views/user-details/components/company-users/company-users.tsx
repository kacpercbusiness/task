import React from 'react';

import { List } from '../../../../components/base/list/list';
import { Text } from '../../../../components/base/text/text';

import styles from './company-users.module.css';

import type { CompanyUser } from '../../utils/get-company-users';

type CompanyUsersProps = {
  users: CompanyUser[];
};

export const CompanyUsers: React.FC<CompanyUsersProps> = ({ users }) => (
  <div className={styles.companyUsers}>
    <Text variant="sm" weight="bold">
      Users in this company:
    </Text>
    <List
      items={users}
      keyExtractor={(user) => user.id}
      renderItem={(user) => (
        <Text variant="sm" className={styles.userName}>
          {user.name}
        </Text>
      )}
      spacing="xs"
    />
  </div>
);
