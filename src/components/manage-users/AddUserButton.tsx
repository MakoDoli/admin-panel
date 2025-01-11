import React from "react";

import { GroupAdd } from "@mui/icons-material";
import { Button } from "@mui/material";

import SearchUser from "./SearchUser";

type Props = {
  handler: () => void;
  setSearchUser: (value: string) => void;
};

export default function AddUser({ handler, setSearchUser }: Props) {
  return (
    <div className="flex flex-col  gap-[18px] md:flex-row justify-between p-3 pt-4 w-full">
      <SearchUser setSearchUser={setSearchUser} />
      <Button
        className="gap-2"
        variant="contained"
        size="large"
        onClick={handler}
      >
        <GroupAdd /> Add User
      </Button>
    </div>
  );
}
