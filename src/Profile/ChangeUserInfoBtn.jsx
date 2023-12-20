import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AvatarBox from "./AvatarBox";
import CircularProgress from "@mui/material/CircularProgress";
import { UpdateUserInfo } from "../Public/Database/UpdateUserInfo";

const ChangeUserInfoBtn = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(userInfo.avatar);
  const [currentName, setCurrentName] = useState(userInfo.name);
  const [isClick, setIsClick] = useState(false);
  const [block, setBlock] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateUserInfo = () => {
    setIsClick(true);
    async function update() {
      const success = await UpdateUserInfo(
        currentAvatar,
        currentName,
        userInfo.email
      );

      success ? window.location.reload() : setOpen(false);
    }
    update();
  };

  useEffect(() => {
    currentName === "" ? setBlock(true) : setBlock(false);
  }, [currentName]);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: "gray", borderColor: "gray" }}
      >
        更改用戶資訊
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
            <AvatarBox
              currentAvatar={currentAvatar}
              setCurrentAvatar={setCurrentAvatar}
            />
            <TextField
              id="outlined-basic"
              value={currentName}
              variant="outlined"
              sx={{ marginTop: "30px" }}
              onChange={(e) => {
                setCurrentName(e.target.value);
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          {isClick ? (
            <CircularProgress />
          ) : (
            <Button onClick={handleUpdateUserInfo} disabled={block} autoFocus>
              儲存
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangeUserInfoBtn;
