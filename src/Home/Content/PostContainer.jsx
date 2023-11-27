import React from "react";
import Post from "./Post";
import Stack from "@mui/material/Stack";

const PostContainer = (props) => {
  const { isHide } = props;

  return (
    <Stack spacing={2}>
      <Post isHide={isHide} />
    </Stack>
  );
};

export default PostContainer;
