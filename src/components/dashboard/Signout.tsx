import React from "react";

import { useRouter } from "next/navigation";

import EditUsers from "../manage-users/EditUsers";

export default function Signout() {
  const router = useRouter();
  router.push("/");
  return <EditUsers />;
}
