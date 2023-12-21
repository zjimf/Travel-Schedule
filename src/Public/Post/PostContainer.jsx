import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Share from "./Share";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const PostContainer = ({
  isAtHome,
  userInfo,
  docID,
  isHide,
  schedules,
  canAdjust,
}) => {
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
            你尚未建立任何行程，來去建立！
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
          <Post
            docID={docID[i]}
            userInfo={userInfo[i]}
            isHide={isHide}
            isAtHome={isAtHome}
            schedule={schedule}
            canAdjust={canAdjust}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default PostContainer;
