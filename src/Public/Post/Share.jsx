import React, { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MoveToGlobal } from "../Database/MoveToGlobal";

const Share = ({ schedules }) => {
  const handleGlobal = (schedules) => {
    MoveToGlobal(schedules);
  };
  return (
    <Tooltip title="SHARE TO GLOBAL" sx={{ marginY: "10px" }}>
      <IconButton onClick={() => handleGlobal(schedules)}>
        <ShareIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default Share;
