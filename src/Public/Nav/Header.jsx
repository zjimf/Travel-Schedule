import { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginBtn from "./LoginBtn";
import UserBtn from "./UserBtn";
import { CheckUserIsLogin } from "../../Public/Methods/CheckUserIsLogin";

import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [userIsLogIn, setUserIsLogIn] = useState(false);

  useEffect(() => {
    const fetchUserIsLogin = async () => {
      const isUserLoggedIn = await CheckUserIsLogin();
      setUserIsLogIn(isUserLoggedIn);
    };
    fetchUserIsLogin();
  }, []);

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
        component="h5"
        variant="h5"
        color="white"
        noWrap
        onClick={() => navigate("/")}
        sx={{
          flex: 1,
          padding: "20px 0px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Travel Schedule
      </Typography>
      {userIsLogIn ? <UserBtn /> : <LoginBtn />}
    </Toolbar>
  );
};

export default Header;
