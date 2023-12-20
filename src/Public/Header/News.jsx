import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import LinkIcon from "@mui/icons-material/Link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    link: "https://travelcom.com.tw/nantou221229/",
    imgPath: require("../Images/new/news1.jpg"),
  },
  {
    link: "https://www.klook.com/zh-TW/activity/1659-taipei-101-taipei/",
    imgPath: require("../Images/new/news2.jpg"),
  },
  {
    link: "https://www.businesstoday.com.tw/article/category/183031/post/202305150033/",
    imgPath: require("../Images/new/news3.jpg"),
  },
];

const News = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleBoxClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "270px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        overflow: "hidden",
      }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    marginTop: "-50px",
                  }}
                  src={step.imgPath}
                />
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
          borderRadius: "0px 10px 0px 10px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <LinkIcon onClick={() => handleBoxClick(images[activeStep].link)} />
      </Box>
    </Box>
  );
};

export default News;
