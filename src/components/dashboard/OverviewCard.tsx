import Image from "next/image";
import React from "react";

type CardProps = {
  src: string;
  title: string;
  number: string;
};

export default function OverviewCard({ src, title, number }: CardProps) {
  return (
    <div className="flex gap-5 rounded-lg shadow-lg w-36 h-16 p-2 items-center bg-blue-50">
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
