import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import { StoreComment } from "../Database/StoreComment";

const CommentInput = ({ userInfo, docID, schedule, setComments }) => {
  const [comment, setComment] = useState("");

  const [hover, setHover] = useState(false);

  const handleSend = async () => {
    const newComment = await StoreComment(comment, userInfo, docID, schedule);
    await setComments((prevComments) => [...prevComments, newComment]);
    setComment("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        marginY: "10px",
        marginX: "15px",
      }}
    >
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        id="input-with-sx"
        label="Input comment"
        variant="standard"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SendIcon
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{ cursor: "pointer" }}
                style={{ color: !hover || "#1976D2" }}
                onClick={handleSend}
              />
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default CommentInput;
