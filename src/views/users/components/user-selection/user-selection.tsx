import { Text } from '../../../../components/base/text/text';

import styles from './user-selection.module.css';

type UserSelectionProps = {
  isEmpty: boolean;
  children: React.ReactNode;
};

export const UserSelection: React.FC<UserSelectionProps> = ({ isEmpty, children }) => (
  <section className={styles.userSelection} aria-labelledby="user-selection-heading" aria-describedby={isEmpty ? 'user-selection-empty' : undefined}>
    <Text as="h1" id="user-selection-heading" variant="xl" weight="bold" className={styles.sectionTitle}>
      Select a User
    </Text>

    {isEmpty && (
      <Text variant="lg" id="user-selection-empty">No users found.</Text>
    )}

    {!isEmpty && children}
  </section>
);
