import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Header";
import News from "./News.jsx";
import NodeBuild from "./NodeBuild.jsx";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();

  return (
    <main style={{ backgroundColor: theme.palette.primary.main }}>
      <CssBaseline />
      <Header title="Travel Schedule" />
      <main style={{ height: "100vh", marginTop: "50px" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <NodeBuild key={"Featured post"} />
            </Grid>
            <Grid item xs={12} md={7}>
              <News key={"Featured post"} />
            </Grid>
          </Grid>
          {/* <Grid container spacing={4} sx={{ marginTop: "40px" }}>
            {featuredPosts.map((post) => (
              <Grid item xs={12}>
                <FeaturedPost key={post.title} post={post} />
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </main>
    </main>
  );
};

export default Home;
