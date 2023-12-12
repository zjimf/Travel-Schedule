import { useEffect, useState } from "react";
import Header from "../Public/Nav/Header.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import PostContainer from "../Public/Post/PostContainer.jsx";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToolBox from "../Public/Post/ToolBox.jsx";
import Footer from "../Public/Footer/Footer.jsx";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
const Profile = () => {
  return (
    <main style={{ backgroundColor: "#f3f4f9" }}>
      <CssBaseline />
      <Header />
      <main style={{ marginTop: "50px" }}>
        <Container maxWidth="xl">
          <Card
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              display: "flex",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            <Avatar alt="Jim" src="/static/images/avatar/1.jpg" />
          </Card>
          <Grid
            container
            spacing={4}
            sx={{
              marginTop: "20px",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5">Your Schedules</Typography>
                <ToolBox />
              </Box>
              <PostContainer />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Profile;
