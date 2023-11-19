import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const NodeBuild = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(to left, #2bc0e4, #eaecc6)",
        borderRadius: "10px",
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
          style={{
            backgroundColor: "#21b6ae",
            fontWeight: "bold",
          }}
        >
          Go now
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ maxWidth: "45%", display: { xs: "none", sm: "block" } }}
        image={require("../Public/Images/beam-woman-sitting-at-desk-and-programming.gif")}
      />
    </Card>
  );
};

export default NodeBuild;
