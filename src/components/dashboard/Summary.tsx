import { useUserStats } from "@/hooks/useUserStats";

import React from "react";
import OverviewCard from "./OverviewCard";

export default function Summary() {
  const { usersCount, femaleCount, maleCount, minAge, maxAge } = useUserStats();
  return (
    <div className="flex flex-wrap justify-around gap-3 w-full">
      <OverviewCard
        src="/summary-icons/group.png"
        title="Users"
        number={`${usersCount}`}
      />
      <OverviewCard
        src="/summary-icons/bar-chart.png"
        title="Age"
        number={`${minAge} - ${maxAge}`}
      />
      <OverviewCard
        src="/summary-icons/woman.png"
        title="Females"
        number={`${femaleCount}`}
      />
      <OverviewCard
        src="/summary-icons/man.png"
        title="Males"
        number={`${maleCount}`}
      />
    </div>
  );
}
