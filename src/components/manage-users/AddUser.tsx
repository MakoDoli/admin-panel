import { Button } from "@mui/material";
import React from "react";

export default function AddUser() {
  return (
    <div className="flex justify-start p-3 w-full">
      <Button variant="contained" size="large">
        + Add User
      </Button>
    </div>
  );
}
