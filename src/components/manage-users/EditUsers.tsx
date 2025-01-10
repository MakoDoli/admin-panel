"use client";
import React, { useContext, useState } from "react";
import { UsersContext } from "@/providers/UsersContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import AddUser from "./AddUser";
import AddModal from "./AddModal";

export default function EditUsers() {
  const { users } = useContext(UsersContext);

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);

  const [userId, setUserId] = useState(0);

  const handleClose = () => {
    setOpenDelete(false);
    setOpenEdit(false);
    setOpenAddUser(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rows = users?.map((user) => ({
    name: user.firstName,
    lastName: user.lastName,
    age: user.age,
    email: user.email,
    id: user.id,
  }));

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: "100%" }}>
      <AddUser handler={() => setOpenAddUser(true)} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold">First name</TableCell>
                <TableCell className="font-bold">Last name</TableCell>
                <TableCell className="font-bold">Age</TableCell>
                <TableCell className="font-bold">Email</TableCell>
                <TableCell className="font-bold">Settings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell className="flex  gap-2">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setOpenEdit(true);
                        setUserId(row.id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        setOpenDelete(true);
                        setUserId(row.id);
                      }}
                    ></Button>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <DeleteModal open={openDelete} onClose={handleClose} userId={userId} />
      <EditModal open={openEdit} onClose={handleClose} userId={userId} />
      <AddModal open={openAddUser} onClose={handleClose} />
    </Box>
  );
}
