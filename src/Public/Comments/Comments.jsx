import React from "react";
import Divider from "@mui/material/Divider";

import Comment from "./Comment";

const Comments = ({ docID, comments }) => {
  return comments.map((comment, i) => (
    <div key={docID + i}>
      <Divider variant="fullWidth" style={{ margin: "0 0 30px 0" }} key={i} />
      <Comment docID={docID} comment={comment} index={i} key={docID} />
    </div>
  ));
};

export default Comments;
