import { useGetCompanies } from 'src/services/companies/queries';
import { useGetUsers } from 'src/services/users/queries';

import { Text } from '../../components/base/text/text';

import styles from './company-info.module.css';
import { CompanyInfoError } from './components/company-info-error/company-info-error';
import { CompanyInfoLoader } from './components/company-info-loader/company-info-loader';
import { getUserCompanies } from './utils/get-user-companies';
import { getUsersWithNames } from './utils/get-user-name';

import type { FC } from 'react';

type CompanyInfoProps = {
  userId: string;
};

export const CompanyInfo: FC<CompanyInfoProps> = ({ userId }) => {
  const { data: companies = [], isLoading: loadingCompanies, isError: companiesError } = useGetCompanies();
  const { data: users = [], isLoading: loadingUsers, isError: usersError } = useGetUsers();

  if (loadingCompanies || loadingUsers) {
    return <CompanyInfoLoader />;
  }

  if (companiesError || usersError || !companies || !users) {
    return <CompanyInfoError message="Failed to load company information." />;
  }

  const userCompanies = getUserCompanies(companies, userId);

  return (
    <div className={styles.container}>
      {userCompanies.map((company) => {
        const usersWithNames = getUsersWithNames(company.users ?? [], users);

        return (
          <div key={company.id} className={styles.card}>
            <Text as="h3" variant="lg" weight="bold">
              {company.name}
            </Text>

            <div className={styles.users}>
              {usersWithNames.map(({ id, name }) => (
                <span key={id} className={styles.user}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};