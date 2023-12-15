import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Share from "./Share";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";

const PostContainer = ({ userInfo, docID, isHide, schedules, canAdjust }) => {
  let navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/nodeSchedule");
  };
  return (
    <Stack spacing={2}>
      {schedules.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              textDecoration: "underLine",
              color: "#1976d2",
            }}
            onClick={handleRedirect}
          >
            Go build your Schedule
          </Typography>
        </Box>
      ) : (
        ""
      )}

      {schedules.map((schedule, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {docID === "" ? "" : <Share schedule={schedule} docID={docID[i]} />}
          <Post
            userInfo={userInfo[i]}
            isHide={isHide}
            schedule={schedule}
            canAdjust={canAdjust}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default PostContainer;
