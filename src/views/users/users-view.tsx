import { useNavigate } from 'react-router';
import { useGetUsers } from 'src/services/users/queries';

import { List } from '../../components/base/list/list';

import { UserSelection } from './components/user-selection/user-selection';
import { UserTile } from './components/user-tile/user-tile';
import { UsersError } from './components/users-error/users-error';
import { UsersLoader } from './components/users-loader/users-loader';
import styles from './users-view.module.css';

import type { User } from '../../services/users/types';

export const UsersView: React.FC = () => {
  const navigate = useNavigate();
  const { data: users = [], isLoading, error } = useGetUsers();

  const handleUserSelect = (user: User) => {
    navigate(`/user-details/${user.id}`, { state: { user } });
  };

  const handleBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return <UsersLoader />;
  }

  if (error) {
    const errorMessage = error?.message ?? 'Failed to fetch users. Please try again later.';

    return (
      <UsersError message={errorMessage} onBack={handleBack} />
    );
  }

  return (
    <div className={styles.container}>
      <UserSelection isEmpty={users.length === 0}>
        <List spacing="md" className={styles.usersList} aria-label="Users">
          {users.map((user) => (
            <List.Item key={user.id}>
              <UserTile user={user} onClick={() => handleUserSelect(user)} />
            </List.Item>
          ))}
        </List>
      </UserSelection>
    </div>
  );
};
