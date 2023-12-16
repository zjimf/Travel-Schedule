import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import { GetRecentComments } from "../Database/GetRecentComments";

const CommentContainer = ({ userInfo, docID, schedule }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getComments(docID) {
      setComments(await GetRecentComments(docID));
    }

    getComments(docID);
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
      <Comments docID={docID} comments={comments} />
      <CommentInput
        userInfo={userInfo}
        docID={docID}
        schedule={schedule}
        setComments={setComments}
      />
    </Card>
  );
};

export default CommentContainer;
