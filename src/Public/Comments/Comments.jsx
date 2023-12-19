import React from "react";
import Divider from "@mui/material/Divider";

import Comment from "./Comment";

const Comments = ({ docID, comments }) => {
  return comments.map((comment, i) => (
    <>
      <Divider variant="fullWidth" style={{ margin: "0 0 30px 0" }} />
      <Comment comment={comment} />
    </>
  ));
};

export default Comments;
