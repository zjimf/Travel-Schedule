import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ChangeUserInfoBtn from "./ChangeUserInfoBtn";
import DeleteAccountBtn from "./DeleteAccountBtn";
import ChangePasswordBtn from "./ChangePasswordBtn";
const User = ({ userInfo }) => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "30px",
        paddingRight: "30px",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="start"
        useFlexGap
        flexWrap="wrap"
        sx={{ margin: "30px 0px 30px 0px" }}
      >
        <Avatar
          src={
            userInfo.avatar === undefined ||
            require(`../Public/Images/avatar/avatar${userInfo.avatar}.png`)
          }
        ></Avatar>
        <Typography
          sx={{ fontSize: 20, whiteSpace: "normal", fontWeight: "bold" }}
        >
          {userInfo.name}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="start"
        useFlexGap
        flexWrap="wrap"
        sx={{ margin: "30px 0px 30px 0px" }}
      >
        <ChangeUserInfoBtn userInfo={userInfo} />
        <ChangePasswordBtn />
        <DeleteAccountBtn />
      </Stack>
    </Card>
  );
};

export default User;
