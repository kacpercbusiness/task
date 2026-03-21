import { request } from '../utils/request';

import type { UsersResponse } from './types';

export const getUsers = async (args: { signal?: AbortSignal } = {}): Promise<UsersResponse> => {
  const { signal } = args;

  return request<UsersResponse>('/data/users.json', {
    cache: 'default',
    ...(signal ? { signal } : {})
  });
};
