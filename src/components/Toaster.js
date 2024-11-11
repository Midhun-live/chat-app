import { Snackbar,Alert,IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function Toaster({message}) {
  const [open, setOpen] = React.useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  return (
    <div>
      <Snackbar
        onchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        variant="warning"
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={message}
        action={[
          <IconButton key="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      >
        <Alert onClose={handleClose} severity="warning" sx={{width:'30w'}}>
            {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Toaster;