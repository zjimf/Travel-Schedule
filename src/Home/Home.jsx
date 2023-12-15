import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../Public/Nav/Header.jsx";
import Footer from "../Public/Footer/Footer.jsx";
import News from "../Public/Header/News.jsx";
import NodeBuild from "../Public/Header/NodeBuild.jsx";
import ToolBox from "../Public/Post/ToolBox.jsx";
import PostContainer from "../Public/Post/PostContainer.jsx";
import { GetRandomSchedule } from "../Public/Database/GetRandomSchedule.js";
import LinearProgress from "@mui/material/LinearProgress";

const Home = () => {
  const [userIsLogIn, setUserIsLogIn] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);
  const [docID, setDocID] = useState([]);

  useEffect(() => {
    async function getSchedule() {
      const storedIsLogin = sessionStorage.getItem("isLogin");
      setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);
      const { schedules, users, docID } = await GetRandomSchedule();
      await setSchedules(schedules);
      await setUsers(users);
      await setDocID(docID);
    }
    getSchedule();
  }, []);

  useEffect(() => {
    console.log({ schedules, users });
  }, [schedules, users]);

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
            <Grid item xs={12} justifyContent="center">
              <ToolBox />
              {users.length === 0 ? (
                <LinearProgress />
              ) : (
                <PostContainer
                  isHide={!userIsLogIn}
                  userInfo={users}
                  schedules={schedules}
                  docID={docID}
                  canAdjust={false}
                />
              )}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Home;
