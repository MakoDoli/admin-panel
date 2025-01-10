import { TextField } from "@mui/material";
import React from "react";

type Props = {
  setSearchUser: (value: string) => void;
};

export default function SearchUser({ setSearchUser }: Props) {
  const handleChange = (e: { target: { value: string } }) => {
    setSearchUser(e.target.value);
  };

  return (
    <TextField
      type="text"
      size="small"
      label="Search User"
      onChange={handleChange}
    />
  );
}
