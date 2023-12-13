import React, { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { StoreUserInfo } from "../Public/Database/StoreUserInfo";
const container = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Verify() {
  let navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const auth = getAuth();
  const location = useLocation();
  const Data = location.state || null;
  const { uid, name, email, password } = Data;

  const timer = setInterval(async function () {
    auth.currentUser.reload();
    if (auth.currentUser.emailVerified) {
      clearInterval(timer);
      await StoreUserInfo(uid, name, email, password);
      sessionStorage.setItem("isLogin", true);
      return navigate("/");
    }
  }, 1000);

  function resend() {
    setHide(true);
    auth.currentUser.reload(); // reloads user fields, like emailVerified:
    if (!auth.currentUser.emailVerified)
      sendEmailVerification(auth.currentUser);
  }

  return (
    <div style={container}>
      <Box
        sx={{
          boxShadow: 2,
          p: 6,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderTopColor: "red",
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Please click on the link in your mailbox to complete the verification
          and continue to log in.
        </Typography>

        <Button
          sx={{ marginTop: "18px" }}
          variant="contained"
          disabled={hide}
          onClick={resend}
          disableElevation
        >
          Resend
        </Button>
      </Box>
    </div>
  );
}

export default Verify;
