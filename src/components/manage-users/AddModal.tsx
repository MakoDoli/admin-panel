// TransitionsModal.jsx
import useUsers from "@/providers/UsersContext";

import React, { useState } from "react";

import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { formFields, modalStyle } from "@/utils/constants";
import { validateField } from "@/utils/helpers";
import { User } from "@/utils/types";

import UserField from "./UserField";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddModal({ open, onClose }: Props) {
  const { users, setUsers } = useUsers();
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    const newErrors = { ...errors };
    const field = formFields.find((field) => field.name === name);
    if (newUser && field) {
      const error = validateField(field.label, value, field.validation);
      if (error) {
        newErrors[field.name] = error;
      } else {
        delete newErrors[field.name];
      }
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (newUser) {
      formFields.forEach((field) => {
        const error = validateField(
          field.label,
          newUser[field.name as keyof User],
          field.validation,
        );
        if (error) newErrors[field.name] = error;
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
    setErrors({});
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
        <Box sx={modalStyle}>
          <Typography id="transition-modal-description" sx={{ mb: 2 }}>
            Add user
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4 text-sm ">
            {formFields.map((field) => (
              <UserField
                key={field.name}
                field={field}
                value={newUser?.[field.name as keyof User]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ))}

            <div className="flex gap-20 w-full">
              <Button
                fullWidth
                type="button"
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  setNewUser(initialUser);
                  setErrors({});
                  onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                name="gender"
                type="submit"
                size="large"
                variant="contained"
                color="primary"
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
