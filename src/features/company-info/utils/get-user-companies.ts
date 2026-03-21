import type { Company } from '../../../services/companies/types';

export const getUserCompanies = (companies: Company[], userId: string): Company[] =>
  companies.filter((company) => company.users?.includes(userId) ?? false);
