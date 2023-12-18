import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { DeleteAccount } from "../Public/Database/DeleteAccount";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, deleteUser } from "firebase/auth";

const DeleteAccountBtn = () => {
  let navigate = useNavigate();
  const auth = getAuth();

  const [open, setOpen] = useState(false);
  const [clickDelete, setClickDelete] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setClickDelete(true);

    sessionStorage.setItem("isLogin", false);

    async function process() {
      setSuccessDelete(await DeleteAccount());
    }
    process();
  };

  useEffect(() => {
    if (successDelete) {
      const user = auth.currentUser;

      deleteUser(user)
        .then(() => {
          console.log("delete");
        })
        .catch((error) => {
          console.log("刪除用戶時出現錯誤：", error);
        });

      signOut(auth);
      navigate("/");
    }
  }, [successDelete]);

  return (
    <>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        Delete Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">永遠刪除帳號</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            你確定要刪除帳號嗎？此操作不可撤銷！一旦刪除，所有紀錄都將被刪除。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleDelete} autoFocus>
            {clickDelete ? <CircularProgress /> : "同意"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountBtn;
