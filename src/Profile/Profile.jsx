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
import { GetUID } from "../Public/Methods/GetUID.js";
import { GetSchedule } from "../Public/Methods/GetSchedule.js";

const Profile = () => {
  const [schedules, setSchedule] = useState([]);
  useEffect(() => {
    async function getSchedule() {
      const uid = await GetUID();
      setSchedule(await GetSchedule(uid));
    }
    getSchedule();
  }, []);

  return (
    <main style={{ backgroundColor: "#f3f4f9" }}>
      <CssBaseline />
      <Header />
      <main style={{ marginTop: "50px" }}>
        <Container maxWidth="xl">
          <User />
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
              <PostContainer schedules={schedules} flag={false} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </main>
  );
};

export default Profile;
