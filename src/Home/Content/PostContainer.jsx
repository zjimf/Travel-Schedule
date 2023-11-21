import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";

const PostContainer = () => {
  return (
    <Stack spacing={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};

export default PostContainer;
