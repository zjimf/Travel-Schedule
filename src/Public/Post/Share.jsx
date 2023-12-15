import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MoveToPublic } from "../Database/MoveToPublic";
import { RemoveFromPublic } from "../Database/RemoveFromPublic";
import CancelIcon from "@mui/icons-material/Cancel";

const Share = ({ schedule, docID }) => {
  const [isPublic, setIsPublic] = useState(schedule.isPublic);

  const handleRemoveFromPublic = (schedule) => {
    setIsPublic(false);
    RemoveFromPublic(schedule, docID);
  };

  const handleStoreInPublic = (schedule) => {
    setIsPublic(true);
    MoveToPublic(schedule, docID);
  };

  return isPublic ? (
    <Tooltip title="REMOVE FROM GLOBAL" sx={{ marginRight: "20px" }}>
      <IconButton onClick={() => handleRemoveFromPublic(schedule, docID)}>
        <CancelIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="SHARE TO GLOBAL" sx={{ marginRight: "20px" }}>
      <IconButton onClick={() => handleStoreInPublic(schedule, docID)}>
        <ShareIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default Share;
