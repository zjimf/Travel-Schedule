import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "../Public/Nav/Header";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import getStepContent from "./getStepContent";
import { GetUID } from "../Public/Methods/GetUID";
import { StoreSchedule } from "../Public/Database/StoreSchedule";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const steps = ["Start / End points", "Adjustment"];

const NodeSchedule = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAllFilled, setIsAllFilled] = useState(false);
  const [begin, setBegin] = useState(null);
  const [end, setEnd] = useState(null);
  const [nodeNum, setNodeNum] = useState(null);
  const [finalNodes, setFinalNodes] = useState();
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setIsAllFilled(false);
  };

  const handleStore = async () => {
    setIsClick(true);
    const uid = await GetUID();
    await StoreSchedule(uid, finalNodes);
    await navigate("/profile");
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Customize your schedule
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <>
            {getStepContent(
              activeStep,
              setBegin,
              setEnd,
              begin,
              end,
              nodeNum,
              setNodeNum,
              setIsAllFilled,
              finalNodes,
              setFinalNodes
            )}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleStore}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!isAllFilled}
                >
                  {isClick ? (
                    <CircularProgress color="inherit" sx={{ width: "5px" }} />
                  ) : (
                    "Store"
                  )}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!isAllFilled}
                >
                  Next
                </Button>
              )}
            </Box>
          </>
        </Paper>
      </Container>
    </>
  );
};

export default NodeSchedule;
