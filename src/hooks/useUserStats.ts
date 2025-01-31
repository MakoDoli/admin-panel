import useUsers from "@/providers/UsersContext";

import { useMemo } from "react";

export function useUserStats() {
  const { users } = useUsers();

  return useMemo(() => {
    const females = users.filter((user) => user.gender === "female");
    const males = users.filter((user) => user.gender === "male");
    const ages = users.reduce(
      (acc, person) => {
        if (person.age < acc.min) acc.min = person.age;
        if (person.age > acc.max) acc.max = person.age;
        return acc;
      },
      { min: Infinity, max: -Infinity },
    );

    return {
      usersCount: users.length,
      femaleCount: females.length,
      maleCount: males.length,
      minAge: ages.min === Infinity ? 0 : ages.min,
      maxAge: ages.max === -Infinity ? 0 : ages.max,
    };
  }, [users]);
}
