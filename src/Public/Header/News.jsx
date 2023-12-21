import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import LinkIcon from "@mui/icons-material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    link: "https://travelcom.com.tw/nantou221229/",
    link_Mobile: "https://www.storm.mg/lifestyle/4079573?page=1",
    imgPath: require("../Images/new/news1.jpg"),
    imgPath_Mobile: require("../Images/new/news1_Mobile.jpg"),
  },
  {
    link: "https://www.klook.com/zh-TW/activity/1659-taipei-101-taipei/",
    link_Mobile:
      "https://www.google.com/search?q=%E5%8F%B0%E7%81%A3%E7%BE%8E%E6%99%AF&tbm=isch&ved=2ahUKEwjQl4-BsKCDAxV7mFYBHb91AjkQ2-cCegQIABAA&oq=%E5%8F%B0%E7%81%A3%E7%BE%8E%E6%99%AF&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIHCAAQgAQQGDIHCAAQgAQQGDIHCAAQgAQQGDIHCAAQgAQQGDoECCMQJzoICAAQgAQQsQNQuBJYiC1gqi9oAHAAeACAAZwBiAH1CZIBBDExLjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=rhqEZdCIKfuw2roPv-uJyAM&bih=959&biw=1920&rlz=1C5CHFA_enTW993TW993#imgrc=x1HvAUb9OiZViM",
    imgPath: require("../Images/new/news2.jpg"),
    imgPath_Mobile: require("../Images/new/news2_Mobile.png"),
  },
  {
    link: "https://www.businesstoday.com.tw/article/category/183031/post/202305150033/",
    link_Mobile:
      "https://www.google.com/search?q=%E5%8F%B0%E7%81%A3%E7%BE%8E%E6%99%AF&tbm=isch&ved=2ahUKEwjQl4-BsKCDAxV7mFYBHb91AjkQ2-cCegQIABAA&oq=%E5%8F%B0%E7%81%A3%E7%BE%8E%E6%99%AF&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIHCAAQgAQQGDIHCAAQgAQQGDIHCAAQgAQQGDIHCAAQgAQQGDoECCMQJzoICAAQgAQQsQNQuBJYiC1gqi9oAHAAeACAAZwBiAH1CZIBBDExLjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=rhqEZdCIKfuw2roPv-uJyAM&bih=959&biw=1920&rlz=1C5CHFA_enTW993TW993#imgrc=vKvaMImLAkLsUM",
    imgPath: require("../Images/new/news3_Mobile.jpg"),
    imgPath_Mobile: require("../Images/new/news3_Mobile.jpg"),
  },
];

const News = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const isMobile = useMediaQuery("(max-width:600px)");

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
              <Box
                key={step.index}
                component="img"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  marginTop: "-50px",
                }}
                src={isMobile ? step.imgPath_Mobile : step.imgPath}
              />
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
        <LinkIcon
          onClick={() =>
            handleBoxClick(
              isMobile
                ? images[activeStep].imgPath_Mobile
                : images[activeStep].link
            )
          }
        />
      </Box>
    </Box>
  );
};

export default News;
