import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Share from "./Share";

const PostContainer = ({ userInfo, isHide, schedules, flag }) => {
  return (
    <Stack spacing={2}>
      {schedules.map((schedules, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Share schedules={schedules} />
          <Post
            userInfo={userInfo}
            isHide={isHide}
            schedules={schedules}
            flag={flag}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default PostContainer;
