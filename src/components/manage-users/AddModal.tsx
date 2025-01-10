// TransitionsModal.jsx
import React, { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { UsersContext } from "@/providers/UsersContext";
import { User } from "@/utils/types";

type Props = {
  open: boolean;
  onClose: () => void;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #1976d2",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  m: 0,
  color: "text.secondary",
};

export default function AddModal({ open, onClose }: Props) {
  const { users, setUsers } = useContext(UsersContext);

  const initialUser = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    gender: "",
  };

  const [newUser, setNewUser] = useState<User>(initialUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (newUser) {
      const updatedUser = {
        ...newUser,
        [name]: value,
        id: users[users.length - 1]?.id + 31,
      };
      setNewUser(updatedUser);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
    onClose();
  };

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
        <Box sx={style}>
          <Typography id="transition-modal-description" sx={{ mb: 2 }}>
            Edit user{" "}
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4 text-sm ">
            <TextField
              fullWidth
              name="firstName"
              label="First Name"
              type="text"
              variant="outlined"
              value={newUser?.firstName}
              className=" rounded-md "
              size="small"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              variant="outlined"
              value={newUser?.lastName}
              className=" rounded-md"
              size="small"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="age"
              label="Age"
              type="text"
              variant="outlined"
              value={newUser?.age}
              className=" rounded-md"
              size="small"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="text"
              variant="outlined"
              value={newUser?.email}
              className=" rounded-md"
              size="small"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="gender"
              label="Gender"
              type="text"
              variant="outlined"
              value={newUser?.gender}
              className=" rounded-md"
              size="small"
              onChange={handleChange}
            />
            <div className="flex gap-20 w-full">
              <Button
                fullWidth
                type="button"
                size="small"
                variant="outlined"
                color="primary"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
                onClick={() => {
                  setNewUser(initialUser);
                  onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                name="gender"
                type="submit"
                size="small"
                variant="contained"
                color="primary"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
