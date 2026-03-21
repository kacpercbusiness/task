import { useParams } from "react-router";

export const useUserQueryId = () => {
  const { userId } = useParams<{ userId: string }>();

  return userId;
};