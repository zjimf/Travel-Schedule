import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../Public/Nav/Header.jsx";
import Footer from "../Public/Footer/Footer.jsx";
import News from "../Public/Header/News.jsx";
import NodeBuild from "../Public/Header/NodeBuild.jsx";
import ToolBox from "../Public/Post/ToolBox.jsx";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#f3f4f9" }}>
      <CssBaseline />
      <Header />
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
              {/* <PostContainer isHide={userIsLogIn} /> */}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Home;
