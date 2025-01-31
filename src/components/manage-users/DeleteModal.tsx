// TransitionsModal.jsx
import useUsers from "@/providers/UsersContext";

import React from "react";

import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { modalStyle } from "@/utils/constants";

type Props = {
  open: boolean;
  onClose: () => void;
  userId: number;
};

export default function DeleteModal({ open, onClose, userId }: Props) {
  const { users, setUsers } = useUsers();
  function handleDelete() {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    onClose();
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Are you sure you want to delete this user?
          </Typography>
          <div className="flex justify-around w-full mt-8">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleDelete}>
              I&apos;m sure
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
