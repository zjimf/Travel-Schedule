import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { FormatDate } from "../Methods/FormateDate";
const Comment = ({ comment }) => {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2} sx={{ marginX: "20px" }}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={comment.avatar} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
          <p style={{ textAlign: "left", width: "85%" }}>{comment.comment}</p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {FormatDate(comment.timeStamp.seconds * 1000)}
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
