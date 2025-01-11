import React from "react";

import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();
  router.push("/");
  return <div className="mt-12 font-bold text-2xl">Signin out..</div>;
}
