import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { FormatDate } from "../Methods/FormateDate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteMsg } from "../Database/DeleteMsg";
import { GetUID } from "../../Public/Database/GetUID";
import CircularProgress from "@mui/material/CircularProgress";

const Comment = ({ comment, docID, index }) => {
  const [uid, setUid] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const handleDelete = () => {
    setDeleting(true);
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
        <Box
          sx={{
            marginX: "30px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={
                  comment.avatar === "" || comment.avatar === undefined
                    ? ""
                    : require(`../../Public/Images/avatar/avatar${comment.avatar}.png`)
                }
              />
              <h4 style={{ margin: "0 0 0 10px", textAlign: "center" }}>
                {comment.name}
              </h4>
            </Box>
            <Box sx={{ marginLeft: "50px" }}>
              <p style={{ textAlign: "left" }}>{comment.comment}</p>
              <p style={{ textAlign: "left", color: "gray" }}>
                {FormatDate(comment.timeStamp.seconds * 1000)}
              </p>
            </Box>
          </Box>

          <Box>
            {comment.uid !== uid ||
              (deleting ? (
                <CircularProgress />
              ) : (
                <DeleteForeverIcon
                  sx={{ cursor: "pointer", fontSize: "30px !important" }}
                  onClick={handleDelete}
                />
              ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Comment;
