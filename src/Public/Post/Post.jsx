import React, { useState } from "react";
import NodeLink from "../Node/NodeLink";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import PostInfo from "./PostInfo";
import LikeAndCommentContainer from "./LikeAndCommentContainer.jsx";
import CommentContainer from "../Comments/CommentContainer.jsx";

const Post = ({ userInfo, docID, isHide, schedule, canAdjust }) => {
  const [isHideCommentContainer, setIsHideCommentContainer] = useState(true);
  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingLeft: "30px",
          flexDirection: "row",
          borderBottom: "1px solid #d8d8d8",
        }}
      >
        <PostInfo userInfo={userInfo} />
        <NodeLink nodeNum={5} schedule={schedule} canAdjust={canAdjust} />
        {isHide ? (
          ""
        ) : (
          <LikeAndCommentContainer
            schedule={schedule}
            docID={docID}
            isHideCommentContainer={isHideCommentContainer}
            setIsHideCommentContainer={setIsHideCommentContainer}
          />
        )}
      </Box>
      {isHideCommentContainer || <CommentContainer />}
    </Card>
  );
};

export default Post;
