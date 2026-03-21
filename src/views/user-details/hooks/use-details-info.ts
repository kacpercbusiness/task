import { useGetCompanies } from "src/services/companies/queries";
import { useGetUsers } from "src/services/users/queries";

export const useDetailsInfo = (userId?: string) => {
  const { data: allUsers = [], isLoading: usersLoading, isError: usersError } = useGetUsers({
    enabled: !!userId,
  });
  const { data: allCompanies = [], isLoading: companiesLoading, isError: companiesError } = useGetCompanies({
    enabled: !!userId,
  });

  const user = userId ? allUsers.find((u) => u.id === userId) : null;
  const companies = userId
    ? allCompanies.filter((company) => company.users?.includes(userId) ?? false)
    : [];

  const isLoading = usersLoading || companiesLoading;
  const error = usersError || companiesError;

  return { user, companies, isLoading, error, allUsers, allCompanies };
};