import React, { useState, useEffect } from "react";
import NodeLink from "../Node/NodeLink";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import PostInfo from "./PostInfo";
import LikeAndCommentContainer from "./LikeAndCommentContainer.jsx";
import CommentContainer from "../Comments/CommentContainer.jsx";
import { GetUID } from "../Database/GetUID";
import { GetUserInfo } from "../Database/GetUserInfo";
import Collapse from "@mui/material/Collapse";

const Post = ({ userInfo, docID, isHide, schedule, canAdjust }) => {
  console.log(docID);
  const [isHideCommentContainer, setIsHideCommentContainer] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    async function getCurrentUser() {
      const uid = await GetUID();
      setCurrentUser(await GetUserInfo(uid));
    }
    getCurrentUser();
  }, []);

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

      <Collapse in={!isHideCommentContainer}>
        <CommentContainer
          userInfo={currentUser}
          docID={docID}
          schedule={schedule}
        />
      </Collapse>
    </Card>
  );
};

export default Post;
