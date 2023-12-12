import React from "react";
import Button from "@mui/material/Button";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
const UserBtn = (props) => {
  const auth = getAuth();
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle sx={{ fontSize: 30, color: "white" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={(e) => {
              signOut(auth);
              navigate("/");
              window.location.reload();
            }}
          >
            Log out
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserBtn;
