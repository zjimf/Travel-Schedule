import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const PostInfo = ({ userInfo }) => {
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
      <Avatar
        src={
          userInfo.avatar === "" ||
          require(`../../Public/Images/avatar/avatar${userInfo.avatar}.png`)
        }
      ></Avatar>
      <Typography
        sx={{ fontSize: 20, whiteSpace: "normal", fontWeight: "bold" }}
      >
        {userInfo.name}
      </Typography>
    </Stack>
  );
};

export default PostInfo;
