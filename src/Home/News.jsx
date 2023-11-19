import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const News = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          News
        </Typography>

        <Typography variant="subtitle1" color="primary">
          Continue reading...
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 160, display: { xs: "none", sm: "block" } }}
        image={"https://source.unsplash.com/random?wallpapers"}
      />
    </Card>
  );
};

export default News;
