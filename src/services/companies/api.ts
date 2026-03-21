import { request } from '../utils/request';

import type { CompaniesResponse } from './types';


export const getCompanies = async (args: { signal?: AbortSignal } = {}): Promise<CompaniesResponse> => {
  const { signal } = args;

  return request<CompaniesResponse>('/data/companies.json', {
    cache: 'default',
    ...(signal ? { signal } : {})
  });
};
