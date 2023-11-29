import React from "react";
import Button from "@mui/material/Button";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogoutBtn = (props) => {
  const auth = getAuth();
  let navigate = useNavigate();

  return (
    <Button
      variant="contained"
      size="medium"
      color="error"
      onClick={(e) => {
        signOut(auth);
        navigate("/");
        window.location.reload();
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutBtn;
