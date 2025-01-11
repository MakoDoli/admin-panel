import React from "react";

import Image from "next/image";

type CardProps = {
  src: string;
  title: string;
  number: string | number;
  theme: string;
};

export default function OverviewCard({ src, title, number, theme }: CardProps) {
  return (
    <div
      className={`flex gap-5 rounded-lg shadow-lg w-36 h-16 p-2 items-center ${theme === "#121212" ? "bg-[rgb(40,52,52)] " : "bg-blue-50"} `}
    >
      <div>
        <Image src={src} alt="icon" width={40} height={40} />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}
