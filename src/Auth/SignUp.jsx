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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  // 驗證電子郵件格式
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const canSubmit =
    name && validateEmail(email) && password.length >= 6 && name.length <= 10;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSubmit) return; // 防止無效提交

    setLoading(true);
    const auth = getAuth();
    try {
      const uid = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((res) => res.user.uid);
      await sendEmailVerification(auth.currentUser);
      await setLoading(false);
      return navigate("/verify", {
        state: {
          uid: uid,
          name: name,
          email: email,
        },
      });
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
                label="暱稱"
                error={name.length > 10}
                helperText={name.length > 10 ? "暱稱不得超過10個字" : ""}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!validateEmail(email) && email !== ""}
                helperText={
                  !validateEmail(email) && email !== ""
                    ? "請輸入有效的電子郵件地址"
                    : ""
                }
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={
                  (password.length > 20 || password.length < 6) &&
                  password !== ""
                }
                helperText={
                  (password.length > 20 || password.length < 6) &&
                  password !== ""
                    ? "密碼需包含6到20個字元"
                    : ""
                }
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
            disabled={!canSubmit || loading}
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
