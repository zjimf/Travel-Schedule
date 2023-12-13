import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";

const PostContainer = ({ isHide, schedules, flag }) => {
  console.log(schedules);
  return (
    <Stack spacing={2}>
      {schedules.map((schedules, i) => (
        <Post key={i} isHide={isHide} schedules={schedules} flag={flag} />
      ))}
    </Stack>
  );
};

export default PostContainer;
