import { useNavigate } from 'react-router';

import { List } from '../../components/base/list/list';

import { AssignedCompanies } from './components/assigned-companies/assigned-companies';
import { CompanyFeature } from './components/company-feature/company-feature';
import { DetailsError } from './components/details-error/details-error';
import { DetailsLoader } from './components/details-loader/details-loader';
import { DetailsSection } from './components/details-section/details-section';
import { useDetailsInfo } from './hooks/use-details-info';
import styles from './user-details-view.module.css';
import { getUniqueFeaturesFromCompanies } from './utils/get-unique-features-from-companies';

type UserDetailsViewProps = {
  userId?: string;
};

export const UserDetailsView: React.FC<UserDetailsViewProps> = ({ userId }) => {
  const navigate = useNavigate();
  const { user, companies, isLoading, error } = useDetailsInfo(userId);

  const handleGoBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return <DetailsLoader />;
  }

  if (error || !user) {
    const errorMessage = error ? 'Failed to load data' : 'User not found';

    return (
      <DetailsError message={errorMessage} onBack={handleGoBack} />
    );
  }

  const features = getUniqueFeaturesFromCompanies(companies);

  return (
    <div className={styles.container}>
      <DetailsSection user={user} onBack={handleGoBack} />

      <AssignedCompanies isEmpty={features.length === 0}>
        <List spacing="md" className={styles.companiesList} aria-label="Features">
          {features.map((feature) => (
            <List.Item key={feature}>
              <CompanyFeature featureId={feature} userId={userId} />
            </List.Item>
          ))}
        </List>
      </AssignedCompanies>
    </div>
  );
};
