import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const container = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Forgot() {
  let navigate = useNavigate();
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState("");
  const auth = getAuth();
  function forget() {
    setSend(true);
    sendPasswordResetEmail(auth, email);
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
        {!send ? (
          <>
            <Typography variant="h5" component="div" gutterBottom>
              輸入E-mail
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              sx={{ marginTop: "18px" }}
              variant="contained"
              onClick={forget}
              disableElevation
            >
              發送
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" component="div" gutterBottom>
              已發送重設訊息至您的郵件
            </Typography>
            <Button
              sx={{ marginTop: "18px" }}
              variant="contained"
              onClick={() => navigate("/login")}
              disableElevation
            >
              回到首頁
            </Button>
          </>
        )}
      </Box>
    </div>
  );
}

export default Forgot;
