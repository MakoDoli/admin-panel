import React from "react";

import { TextField } from "@mui/material";

type Props = {
  field: { name: string; label: string; type: string };
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function UserField({ field, value, onChange, error }: Props) {
  return (
    <TextField
      fullWidth
      name={field.name}
      label={field.label}
      type={field.type}
      variant="outlined"
      value={value || ""}
      onChange={onChange}
      error={!!error}
      size="small"
      className="rounded-md"
    />
  );
}
