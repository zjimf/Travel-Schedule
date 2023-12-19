import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

const ChangeUserInfoBtn = ({ userInfo }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: "gray", borderColor: "gray" }}
      >
        Change User Information
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">更改用戶資訊</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={
                userInfo.avatar === undefined ||
                require(`../Public/Images/avatar/avatar${userInfo.avatar}.png`)
              }
            />
            <TextField
              id="outlined-basic"
              value={userInfo.name}
              variant="outlined"
              sx={{ marginTop: "30px" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            儲存
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangeUserInfoBtn;
