import { useQuery } from '@tanstack/react-query';

import { getUsers } from './api';
import { queryKeys } from './keys';

type Args = {enabled?: boolean};

export const useGetUsers = ({enabled}: Args = {}) => {
  return useQuery({
    queryKey: queryKeys.all(),
    queryFn: ({ signal }) => getUsers({ signal }),
    enabled
  });
};
