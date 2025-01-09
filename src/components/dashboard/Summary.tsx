import { useUserStats } from "@/hooks/useUserStats";

import React from "react";
import OverviewCard from "./OverviewCard";

type Props = {
  theme: string;
};
export default function Summary({ theme }: Props) {
  const { usersCount, femaleCount, maleCount, minAge, maxAge } = useUserStats();
  const cards = [
    {
      src: "/summary-icons/group.png",
      title: "Users",
      number: usersCount,
      theme,
    },
    {
      src: "/summary-icons/bar-chart.png",
      title: "Age",
      number: `${minAge} - ${maxAge}`,
      theme,
    },
    {
      src: "/summary-icons/woman.png",
      title: "Female",
      number: femaleCount,
      theme,
    },
    {
      src: "/summary-icons/man.png",
      title: "Users",
      number: `${maleCount}`,
      theme,
    },
  ];
  return (
    <div className="flex flex-wrap justify-around gap-3 w-full mt-4 mb-8">
      {cards.map((card) => (
        <OverviewCard
          key={card.src}
          src={card.src}
          title={card.title}
          number={card.number}
          theme={card.theme}
        />
      ))}
    </div>
  );
}
