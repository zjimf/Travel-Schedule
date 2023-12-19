import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { FormatDate } from "../Methods/FormateDate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteMsg } from "../Database/DeleteMsg";
import { GetUID } from "../../Public/Database/GetUID";

const Comment = ({ comment, docID, index }) => {
  const [uid, setUid] = useState("");
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    DeleteMsg(comment, docID, index, setDeleted);
  };

  useEffect(() => {
    async function get() {
      setUid(await GetUID());
    }
    get();
  }, [uid]);
  return (
    <>
      {deleted || (
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

          <Grid justifyContent="left" item zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
            <p style={{ textAlign: "left" }}>{comment.comment}</p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {FormatDate(comment.timeStamp.seconds * 1000)}
            </p>
          </Grid>
          {comment.uid === uid ? (
            <DeleteForeverIcon
              sx={{ cursor: "pointer", fontSize: "30px !important" }}
              onClick={handleDelete}
            />
          ) : (
            <></>
          )}
        </Grid>
      )}
    </>
  );
};

export default Comment;
