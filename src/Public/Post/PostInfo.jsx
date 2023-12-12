import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const PostInfo = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="start"
      useFlexGap
      flexWrap="wrap"
      sx={{ margin: "30px 0px 30px 0px", width: "350px" }}
    >
      <Avatar>J</Avatar>
      <Typography
        sx={{ fontSize: 20, whiteSpace: "normal", fontWeight: "bold" }}
      >
        Jim
      </Typography>
    </Stack>
  );
};

export default PostInfo;
