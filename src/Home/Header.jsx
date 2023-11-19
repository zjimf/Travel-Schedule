import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Header = (props) => {
  const { title } = props;
  const theme = useTheme();

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
        <Button variant="contained" size="medium" color="success">
          Log in
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
