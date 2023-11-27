import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { HandleErrorMsg } from "../Public/Methods/HandleErrMsg";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoading(true);

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.get("email"),
        data.get("password")
      ).then((res) => res.user.uid);
      await sendEmailVerification(auth.currentUser);
      await setLoading(false);
      return navigate("/verify");
    } catch (error) {
      setLoading(false);
      setError(HandleErrorMsg(error.code));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100, m: 2, bgcolor: "secondary.main" }}
        ></Avatar>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                fullWidth
                id="name"
                label="姓名"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="密碼"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              {error ? <Alert severity="error">{error}</Alert> : ""}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? (
              <CircularProgress color="inherit" size="1.5rem" />
            ) : (
              "註冊"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
