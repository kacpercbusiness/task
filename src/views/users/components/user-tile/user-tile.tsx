import { Avatar } from '../../../../components/base/avatar/avatar';
import { Text } from '../../../../components/base/text/text';
import { Tile } from '../../../../components/base/tile/tile';

import styles from './user-tile.module.css';

import type { User } from '../../../../services/users/types';

type UserTileProps = {
  user: User;
  onClick: () => void;
};

export const UserTile: React.FC<UserTileProps> = ({ user, onClick }) => (
  <Tile.Button
    padding="md"
    className={styles.userTile}
    onClick={onClick}
    aria-label={`View details for ${user.name}`}
  >
    <div className={styles.userContent}>
      {user.avatar ? (
        <Avatar src={user.avatar} alt={`${user.name} avatar`} size="lg" />
      ) : (
        <Avatar.Initials
          initials={user.name.split(' ').map((n) => n[0]).join('')}
          size="lg"
          ariaLabel={`${user.name} avatar`}
        />
      )}
      <div className={styles.userDetails}>
        <Text variant="lg" weight="bold">
          {user.name}
        </Text>
        <Text variant="sm" className={styles.date}>
          Created at: {new Date(user.createdAt).toLocaleDateString()}
        </Text>
      </div>
    </div>
  </Tile.Button>
);
