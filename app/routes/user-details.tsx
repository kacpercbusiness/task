import { useUserQueryId } from "src/views/user-details/hooks/use-user-query-id";

import { UserDetailsView } from "../../src/views/user-details/user-details-view";

export default function UserDetails() {
  const userId = useUserQueryId();

  return <UserDetailsView key={userId} userId={userId} />;
}
