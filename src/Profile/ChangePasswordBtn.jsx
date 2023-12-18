import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  getAuth,
} from "firebase/auth";

const ChangePasswordBtn = () => {
  const [open, setOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const canSubmit =
    oldPassword &&
    newPassword &&
    confirmPassword &&
    newPassword === confirmPassword;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError(false);
    setOpen(false);
  };

  const handleSend = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      // 創建一個新的認證對象
      const credential = EmailAuthProvider.credential(
        user.email, // 確保 user 對象包含電子郵件地址
        oldPassword
      );

      // 重新驗證用戶
      await reauthenticateWithCredential(user, credential);

      // 在此處進行密碼更改，只有在重新驗證成功後
      await updatePassword(user, newPassword);
      navigate("/login");
    } catch (error) {
      // 處理重新驗證或密碼更新時的錯誤
      if (error.code === "auth/wrong-password") {
        // 處理錯誤，舊密碼不正確
        alert("舊密碼不正確，請重試。");
      } else {
        if (error.code === "auth/invalid-login-credentials") {
          alert("舊密碼不正確，請重試。");
        } else if (error.code === "auth/weak-password")
          alert("新密碼強度不足，請重試。");
      }
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">更改密碼</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              id="old-password"
              label="請輸入舊密碼"
              variant="standard"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
              id="new-password"
              label="請輸入新密碼"
              variant="standard"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={error}
            />
            <TextField
              id="confirm-password"
              label="請再次輸入新密碼"
              variant="standard"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(e.target.value !== newPassword);
              }}
              error={error}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSend} autoFocus disabled={!canSubmit}>
            送出
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePasswordBtn;
