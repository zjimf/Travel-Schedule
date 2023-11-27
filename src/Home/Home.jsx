import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Nav/Header.jsx";
import Footer from "./Footer.jsx";
import News from "./Header/News.jsx";
import NodeBuild from "./Header/NodeBuild.jsx";
import PostContainer from "./Content/PostContainer.jsx";
import ToolBox from "./Content/ToolBox.jsx";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#f3f4f9" }}>
      <CssBaseline />
      <Header title="Travel Schedule" />
      <main style={{ marginTop: "50px" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <NodeBuild key={"Featured post"} />
            </Grid>

            <Grid item xs={12} md={7}>
              <News key={"Featured post"} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            sx={{
              marginTop: "30px",
            }}
          >
            <Grid item xs={12}>
              <ToolBox />
              <PostContainer />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Home;
