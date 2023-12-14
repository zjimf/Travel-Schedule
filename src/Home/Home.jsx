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
import { GetUID } from "../Public/Database/GetUID.js";
import { GetSchedule } from "../Public/Database/GetSchedule.js";
import { GetUserInfo } from "../Public/Database/GetUserInfo.js";

const Home = () => {
  const [userIsLogIn, setUserIsLogIn] = useState(false);
  const [schedules, setSchedule] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [getDataFinish, setGetDataFinish] = useState(false);
  const [docID, setDocID] = useState("");

  useEffect(() => {
    async function getSchedule() {
      // const uid = await GetUID();
      const storedIsLogin = sessionStorage.getItem("isLogin");
      setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);
      // setUserInfo(await GetUserInfo(uid));
      // const { docID, schedules } = await GetSchedule(uid);
      // setSchedule(schedules);
      // setDocID(docID);
      // await setGetDataFinish(true);
    }
    getSchedule();
  }, []);

  useEffect(() => {
    const storedIsLogin = sessionStorage.getItem("isLogin");
    setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);
  }, []);
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
              {/* <PostContainer
                  isHide={!userIsLogIn}
                  userInfo={userInfo}
                  schedules={schedules}
                  docID={docID}
                  canAdjust={false}
                /> */}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Home;
