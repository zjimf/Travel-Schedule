import React, { useState, useEffect } from "react";
import NodeLink from "../Node/NodeLink";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleIcon from "@mui/icons-material/Article";
import PostInfo from "./PostInfo";
import Tooltip from "@mui/material/Tooltip";
import { UpdatePostLike } from "../Database/UpdatePostLike.js";

const iconStyle = {
  fontSize: "30px",
  marginLeft: "15px",
  marginRight: "15px",
  cursor: "pointer",
};

const Post = ({ userInfo, docID, isHide, schedule, canAdjust }) => {
  const [likes, setLikes] = useState(schedule.likes);
  const [isLike, setIsLike] = useState(schedule.isLike);

  const handleLike = () => {
    isLike ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLike(!isLike);
  };

  useEffect(() => {
    UpdatePostLike(schedule, docID, likes, isLike);
  }, [likes]);

  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "30px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <PostInfo userInfo={userInfo} />
        <NodeLink nodeNum={5} schedule={schedule} canAdjust={canAdjust} />
        {isHide ? (
          ""
        ) : (
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
                <ArticleIcon style={iconStyle} />
              </Tooltip>
            </Box>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default Post;
