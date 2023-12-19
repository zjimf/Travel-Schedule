import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const AvatarBox = ({ currentAvatar, setCurrentAvatar }) => {
  const elements = Array.from({ length: 12 }, (_, index) => (
    <Grid item xs={2}>
      <Avatar
        onClick={() => {
          setCurrentAvatar(index + 1);
        }}
        src={require(`../Public/Images/avatar/avatar${index + 1}.png`)}
        sx={{
          cursor: "pointer",
          filter:
            parseInt(currentAvatar) === index + 1
              ? "grayscale(100%) brightness(50%)"
              : "none",
          border:
            parseInt(currentAvatar) === index + 1 ? "2px solid green" : "none",
        }}
      />
    </Grid>
  ));
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      {elements}
    </Grid>
  );
};

export default AvatarBox;
