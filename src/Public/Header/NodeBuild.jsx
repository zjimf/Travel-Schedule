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
          準備好，
          <br />
          來建立你的行程吧!
        </Typography>
        <Typography
          variant="body1"
          color="#52867f"
          sx={{ margin: "10px 0px " }}
        >
          輸入起點與終點，系統會自動生成行程，你也可以客製化其中的節點，快點擊下方按鈕建立專屬於你的行程吧！
        </Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={() => navigate(userIsLogIn ? "/nodeSchedule" : "/login")}
          style={{
            backgroundColor: "#a8e3c4",
            fontWeight: "bold",
            color: "#004a4f",
            fontSize: "15px",
          }}
        >
          建立行程
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
