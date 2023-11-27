import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import Alert from "@mui/material/Alert";
import { HandleErrorMsg } from "../Public/Methods/HandleErrMsg";
const LogIn = () => {
  let navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const auth = await getAuth();
    signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then(async (userCredential) => {
        if (!userCredential.user.emailVerified) {
          setError("尚未驗證該email，請至信箱確認郵件");
          return;
        }
        const uid = userCredential.user.uid;

        navigate("/", {
          state: {
            uid: uid,
          },
        });
      })
      .catch((error) => {
        console.log(error.code);
        setError(HandleErrorMsg(error.code));
      });
  };

  useEffect(() => {
    //clear session
    sessionStorage.clear();
    //log out
    const auth = getAuth();
    signOut(auth);
  }, []);

  useEffect(() => {
    console.log(error);
  }, [error]);

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
        ></Avatar>
        <Typography component="h1" variant="h5">
          Travel Schedule
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            Login
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href="./forgetPass" variant="body2">
                {"忘記密碼"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="./SignUp" variant="body2">
                {"還未擁有帳戶？註冊"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
