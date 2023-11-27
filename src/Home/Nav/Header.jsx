import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
const Header = (props) => {
  const { userIsLogIn } = props;
  return (
    <Toolbar
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        background: "#233044",
        borderBottomWidth: "2px",
        borderBottomColor: "rgba(218,224,231,0.09)",
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        color="white"
        noWrap
        sx={{ flex: 1, padding: "20px 0px", fontWeight: "bold" }}
      >
        Travel Schedule
      </Typography>
      {userIsLogIn ? <LogoutBtn /> : <LoginBtn />}
    </Toolbar>
  );
};

export default Header;
