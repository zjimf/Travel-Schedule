import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import { StoreComment } from "../Database/StoreComment";
import CircularProgress from "@mui/material/CircularProgress";

const CommentInput = ({ userInfo, docID, schedule, setComments }) => {
  const [comment, setComment] = useState("");
  const [canClick, setCanClick] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (comment === "") return;

    setSending(true);
    const newComment = await StoreComment(comment, userInfo, docID, schedule);
    await setComments((prevComments) => [...prevComments, newComment]);

    setComment("");
    setSending(false);
  };

  const handleType = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    comment === "" ? setCanClick(false) : setCanClick(true);
  }, [comment]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        marginY: "10px",
        marginX: "15px",
      }}
    >
      <Avatar
        src={
          userInfo.avatar === "" || userInfo.avatar === undefined
            ? ""
            : require(`../Images/avatar/avatar${userInfo.avatar}.png`)
        }
        sx={{ width: "30px", height: "30px", mr: 1, my: 0.5 }}
      />
      <TextField
        id="input-with-sx"
        label="Input comment"
        variant="standard"
        value={comment}
        onChange={handleType}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              {sending ? (
                <CircularProgress />
              ) : (
                <SendIcon
                  disabled={!canClick}
                  sx={{ cursor: "pointer" }}
                  style={{ color: !canClick || "#1976D2" }}
                  onClick={handleSend}
                />
              )}
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default CommentInput;
