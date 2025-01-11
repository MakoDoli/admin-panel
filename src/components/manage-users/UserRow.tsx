import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TableCell, TableRow } from "@mui/material";

import { User } from "@/utils/types";

type Props = {
  row: User;
  onEdit: () => void;
  onDelete: () => void;
};

export default function UserRow({ row, onEdit, onDelete }: Props) {
  return (
    <TableRow key={row.firstName}>
      <TableCell>{row.firstName}</TableCell>
      <TableCell>{row.lastName}</TableCell>
      <TableCell>{row.age}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell className="flex  gap-2">
        <Button variant="contained" size="small" onClick={onEdit}>
          Edit
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        ></Button>
      </TableCell>
    </TableRow>
  );
}
