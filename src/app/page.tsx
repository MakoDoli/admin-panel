import { Metadata } from "next";

import Signin from "@/components/login/Signin";

export const metadata: Metadata = {
  title: "Login",
};
export default function Home() {
  return <Signin />;
}
