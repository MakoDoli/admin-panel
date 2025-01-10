import { Button } from "@mui/material";
import React from "react";
type Props = {
  handler: () => void;
};

export default function AddUser({ handler }:Props) {
  return (
    <div className="flex justify-start p-3 w-full">
      <Button variant="contained" size="large" onClick={handler}>
        + Add User
      </Button>
    </div>
  );
}
