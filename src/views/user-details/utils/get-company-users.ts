import type { Company } from "src/services/companies/types";
import type { User } from "src/services/users/types";

export type CompanyUser = { id: string; name: string };

export const getCompanyUsers = (company: Company, users: User[]): CompanyUser[] => {
  return (company.users ?? []).reduce<CompanyUser[]>((acc, id) => {
    const user = users.find((u) => u.id === id);

    if (user) {
      acc.push({ id: user.id, name: user.name });
    }

    return acc;
  }, []);
};