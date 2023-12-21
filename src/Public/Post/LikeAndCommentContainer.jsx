import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleIcon from "@mui/icons-material/Article";
import { toggleLike } from "../Database/toggleLike.js";
import { GetUID } from "../Database/GetUID.js";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const [likes, setLikes] = useState(schedule.likes.length);
  const [isLike, setIsLike] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLike = () => {
    async function handleLikeEve() {
      setIsLike(!isLike);
      isLike ? setLikes(likes - 1) : setLikes(likes + 1);
      await toggleLike(schedule, docID);
    }
    handleLikeEve();
  };

  const handleComment = () => {
    setIsHideCommentContainer(!isHideCommentContainer);
  };

  useEffect(() => {
    async function checkIsLike() {
      const uid = await GetUID();
      await setIsLike(schedule.likes.includes(uid));
    }
    checkIsLike();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: isMobile || "1px solid #d8d8d8",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: isMobile ? "100%" : "",
          margin: isMobile ? "0 30px 10px 0" : "",
          display: "flex",
          flexDirection: isMobile ? "row" : "column", // 根據螢幕寬度動態調整排列方向
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
        <Tooltip title={""} placement="right">
          <ArticleIcon style={iconStyle} onClick={handleComment} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default LikeAndCommentContainer;
