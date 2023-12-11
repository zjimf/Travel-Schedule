import React from "react";
import NodeLink from "../../Public/Node/NodeLink";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PostInfo from "./PostInfo";
const iconStyle = {
  fontSize: "30px",
  marginLeft: "10px",
  cursor: "pointer",
};

const Post = (props) => {
  const { isHide } = props;
  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 1024px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <PostInfo />
        <NodeLink nodeNum={5} finalNodes={[]} />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {isHide ? (
          <>
            <FavoriteBorderIcon style={iconStyle} />
            <ChatBubbleOutlineIcon style={iconStyle} />
          </>
        ) : (
          ""
        )}
        <AddCircleOutlineIcon style={iconStyle} />
      </Box>
    </Card>
  );
};

export default Post;
