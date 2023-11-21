import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { title } = props;
  const theme = useTheme();
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: theme.palette.primary.dark,
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
          {title}
        </Typography>
        <Button
          variant="contained"
          size="medium"
          color="success"
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
