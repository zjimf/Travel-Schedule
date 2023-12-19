import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { FormatDate } from "../Methods/FormateDate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Comment = ({ comment }) => {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2} sx={{ marginX: "20px" }}>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={
              comment.avatar === "" || comment.avatar === undefined
                ? ""
                : require(`../../Public/Images/avatar/avatar${comment.avatar}.png`)
            }
          />
        </Grid>
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            margin: "0 0 0 35px",
          }}
        > */}
        <Grid justifyContent="left" item zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
          <p style={{ textAlign: "left" }}>{comment.comment}</p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {FormatDate(comment.timeStamp.seconds * 1000)}
          </p>
        </Grid>
        {/* <Grid>
            <DeleteForeverIcon
              sx={{ cursor: "pointer", fontSize: "30px !important" }}
            />
          </Grid> */}
        {/* </Box> */}
      </Grid>
    </>
  );
};

export default Comment;
