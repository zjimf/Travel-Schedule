import React from "react";
import NodeLink from "../Node/NodeLink";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PostInfo from "./PostInfo";
const iconStyle = {
  fontSize: "30px",
  marginLeft: "4px",
  marginRight: "15px",
  cursor: "pointer",
};

const Post = ({ userInfo, isHide, schedule, canAdjust }) => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "30px",
        paddingRight: "30px",
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
      </Box>
      {isHide ? (
        ""
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            123
            <FavoriteBorderIcon style={iconStyle} />
            123
            <ChatBubbleOutlineIcon style={iconStyle} />
          </Box>
        </Box>
      )}
    </Card>
  );
};

export default Post;
