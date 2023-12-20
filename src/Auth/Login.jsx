import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getAuth, signOut } from "firebase/auth";
import Alert from "@mui/material/Alert";
import { HandleLogInSubmit } from "../Public/Methods/HandleLogInSubmit";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  useEffect(() => {
    sessionStorage.clear();
    const auth = getAuth();
    signOut(auth);
  }, []);

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
          sx={{ width: 150, height: 150, m: 2, bgcolor: "secondary.main" }}
          src={require("../Public/Images/Logo.jpg")}
        />
        <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
          Travel Schedule
        </Typography>
        <Box
          component="form"
          onSubmit={(event) => HandleLogInSubmit(event, setError, navigateRef)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="密碼"
            type="password"
            id="password"
            autoComplete="new-password"
          />

          {error ? <Alert severity="error">{error}</Alert> : ""}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登入
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                onClick={() => navigate("/forgot")}
                variant="body2"
                sx={{
                  color: "#1976d2",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {"忘記密碼"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                onClick={() => navigate("/Signup")}
                variant="body2"
                sx={{
                  color: "#1976d2",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {"還沒有帳戶？點擊即可註冊"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
