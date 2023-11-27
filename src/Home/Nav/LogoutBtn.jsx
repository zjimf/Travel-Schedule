import React from "react";
import Button from "@mui/material/Button";
import { getAuth, signOut } from "firebase/auth";

const LogoutBtn = (props) => {
  const auth = getAuth();

  return (
    <Button
      variant="contained"
      size="medium"
      color="error"
      onClick={(e) => {
        signOut(auth);
        window.location.reload();
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutBtn;
