import type { User } from '../../../services/users/types';

export const getUserName = (id: string, users: User[]): string | null => {
  const user = users.find((u) => u.id === id);
  if (!user?.name?.trim()) {
    return null;
  }

  return user.name;
};

export const getUsersWithNames = (userIds: string[], users: User[]): { id: string; name: string }[] =>
  userIds.reduce<{ id: string; name: string }[]>((acc, id) => {
    const name = getUserName(id, users);
    if (name) acc.push({ id, name });

    return acc;
  }, []);
