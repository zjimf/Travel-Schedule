import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleIcon from "@mui/icons-material/Article";
import { UpdatePostLike } from "../Database/UpdatePostLike.js";

const iconStyle = {
  fontSize: "30px",
  marginLeft: "15px",
  marginRight: "15px",
  cursor: "pointer",
};

const LikeAndCommentContainer = ({
  schedule,
  docID,
  isHideCommentContainer,
  setIsHideCommentContainer,
}) => {
  const [likes, setLikes] = useState(schedule.likes);
  const [isLike, setIsLike] = useState(schedule.isLike);

  const handleLike = () => {
    isLike ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLike(!isLike);
  };

  const handleComment = () => {
    setIsHideCommentContainer(!isHideCommentContainer);
  };

  useEffect(() => {
    UpdatePostLike(schedule, docID, likes, isLike);
  }, [likes]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: "1px solid #d8d8d8",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Tooltip title={likes} placement="right">
          <FavoriteIcon
            style={iconStyle}
            onClick={handleLike}
            color={isLike ? "error" : ""}
          />
        </Tooltip>
        <Tooltip title={schedule.commentsLen} placement="right">
          <ArticleIcon style={iconStyle} onClick={handleComment} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default LikeAndCommentContainer;
