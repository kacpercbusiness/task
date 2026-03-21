import { useQuery } from '@tanstack/react-query';

import { getCompanies } from './api';
import { queryKeys } from './keys';

type Args = {enabled?: boolean};

export const useGetCompanies = ({enabled}: Args = {}) => {
  return useQuery({
    queryKey: queryKeys.all(),
    queryFn: ({ signal }) => getCompanies({ signal }),
    enabled
  });
};
