import React, { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Share = ({ schedules }) => {
  useEffect(() => {
    console.log(schedules);
  }, []);
  return (
    <Tooltip title="SHARE TO GLOBAL" sx={{ marginY: "10px" }}>
      <IconButton>
        <ShareIcon sx={{ fontSize: "30px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default Share;
