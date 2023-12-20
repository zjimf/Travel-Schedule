import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginBtn = (props) => {
  let navigate = useNavigate();

  return (
    <Button
      variant="contained"
      size="medium"
      color="success"
      onClick={(e) => {
        navigate("/login");
      }}
    >
      登入
    </Button>
  );
};

export default LoginBtn;
