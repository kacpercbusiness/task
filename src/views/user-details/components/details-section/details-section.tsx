import { Avatar } from '../../../../components/base/avatar/avatar';
import { Text } from '../../../../components/base/text/text';

import styles from './details-section.module.css';

import type { User } from '../../../../services/users/types';

type DetailsSectionProps = {
  user: User;
  onBack: () => void;
};

export const DetailsSection: React.FC<DetailsSectionProps> = ({ user, onBack }) => (
  <section className={styles.userSection} aria-labelledby="user-details-heading">
    {user.avatar ? (
      <Avatar src={user.avatar} alt={`${user.name} avatar`} size="lg" className={styles.avatar} />
    ) : (
      <Avatar.Initials
        initials={user.name.split(' ').map((n) => n[0]).join('')}
        size="lg"
        className={styles.avatar}
        ariaLabel={`${user.name} avatar`}
      />
    )}
    <Text id="user-details-heading" variant="lg" weight="bold" className={styles.userName}>
      {user.name}
    </Text>
    <Text variant="sm" className={styles.userDate}>
      Member since: {new Date(user.createdAt).toLocaleDateString()}
    </Text>
    <button type="button" onClick={onBack} className={styles.backButton} aria-label="Change user and return to user selection">
      Change User
    </button>
  </section>
);
