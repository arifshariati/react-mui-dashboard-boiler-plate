import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SimpleSnackbar() {
  const snackbar = useState({open:false});

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    if (snackbar.onClose) {
      snackbar.onClose();
    }

  };

  return (
    <div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
