import React from "react";

import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { modalStyle } from "@/utils/constants";

export default function Signout() {
  const router = useRouter();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      //onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={true}>
        <Box sx={modalStyle}>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            You will be signed out
          </Typography>
          <div className="flex gap-10 w-full mt-8">
            <Button variant="outlined" onClick={() => router.push("/overview")}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => router.push("/")}>
              ok
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
