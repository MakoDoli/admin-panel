import { UsersContext } from "@/providers/UsersContext";
import { API_URL } from "@/utils/constants";
import { UsersResponse } from "@/utils/types";
import { useContext, useEffect, useState } from "react";

export default function useGetUsers() {
  const { setUsers } = useContext(UsersContext);
  const [data, setData] = useState<UsersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
      setUsers(data.users);
    } catch (err) {
      console.warn(err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
