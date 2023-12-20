import { useEffect, useState } from "react";
import Header from "../Public/Nav/Header.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import PostContainer from "../Public/Post/PostContainer.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToolBox from "../Public/Post/ToolBox.jsx";
import Footer from "../Public/Footer/Footer.jsx";
import Typography from "@mui/material/Typography";
import User from "./User.jsx";
import { GetUID } from "../Public/Database/GetUID.js";
import { GetSchedule } from "../Public/Database/GetSchedule.js";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [schedules, setSchedule] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [docID, setDocID] = useState("");
  const [userIsLogIn, setUserIsLogIn] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLogin = sessionStorage.getItem("isLogin");
    setUserIsLogIn(storedIsLogin ? JSON.parse(storedIsLogin) : false);

    async function getSchedule() {
      const uid = await GetUID();
      const { docID, schedules, user, users } = await GetSchedule(uid);
      await setSchedule(schedules);
      await setDocID(docID);
      await setUsersInfo(users);
      await setUserInfo(user);
    }
    getSchedule();
  }, []);

  useEffect(() => {
    if (!userIsLogIn) navigate("/login");
  }, [userIsLogIn]);

  return (
    <main style={{ backgroundColor: "#f3f4f9" }}>
      <CssBaseline />
      <Header />
      <main style={{ marginTop: "50px" }}>
        <Container maxWidth="xl">
          <User userInfo={usersInfo.length === 0 ? userInfo : usersInfo[0]} />
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
                <Typography
                  variant="h5"
                  sx={{ marginBottom: "15px", fontWeight: "bold" }}
                >
                  Your Schedules
                </Typography>
                {/* <ToolBox /> */}
              </Box>
              {docID === "" ? (
                <LinearProgress />
              ) : (
                <PostContainer
                  isHide={false}
                  userInfo={usersInfo}
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

export default Profile;
