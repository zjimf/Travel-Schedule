import { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginBtn from "./LoginBtn";
import UserBtn from "./UserBtn";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [userIsLogIn, setUserIsLogIn] = useState(false);
  const location = useLocation();

  const handleBackHome = () => {
    if (location.pathname === "/nodeSchedule") {
      const userConfirmed = window.confirm(
        "你確定要離開本頁嗎? 所有資料將會遺失。"
      );
      if (userConfirmed) navigate("/");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const storedIsLogin = sessionStorage.getItem("isLogin");
    setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);
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
        onClick={handleBackHome}
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
