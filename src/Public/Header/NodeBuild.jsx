import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NodeBuild = () => {
  const [userIsLogIn, setUserIsLogIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const storedIsLogin = sessionStorage.getItem("isLogin");
    setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);
  }, []);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(to right, #c2e59c, #64b3f4)",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <Typography variant="h4" color="#004a4f" sx={{ fontWeight: "bold" }}>
          Let's go
          <br /> Travel Schedule !
        </Typography>
        <Typography
          variant="body1"
          color="#52867f"
          sx={{ margin: "10px 0px " }}
        >
          Enter the starting point and end point andschedule automatically,
          which can also be customized.
        </Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={() => navigate(userIsLogIn ? "/nodeSchedule" : "/login")}
          style={{
            backgroundColor: "#a8e3c4",
            fontWeight: "bold",
            color: "#004a4f",
          }}
        >
          Go now
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ maxWidth: "45%", display: { xs: "none", sm: "block" } }}
        image={require("../../Public/Images/beam-woman-sitting-at-desk-and-programming.gif")}
      />
    </Card>
  );
};

export default NodeBuild;
