import React, { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  const timer = setInterval(function () {
    auth.currentUser.reload();
    if (auth.currentUser.emailVerified) {
      clearInterval(timer);
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
          請至信箱點擊連結完成驗證，即可繼續登入
        </Typography>

        <Button
          sx={{ marginTop: "18px" }}
          variant="contained"
          disabled={hide}
          onClick={resend}
          disableElevation
        >
          重送驗證信
        </Button>
      </Box>
    </div>
  );
}

export default Verify;
