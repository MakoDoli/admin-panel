import { useRouter } from "next/navigation";
import React from "react";

export default function Signout() {
  const router = useRouter();
  router.push("/");
  return <div className="mt-12 font-bold text-2xl">Signin out..</div>;
}
