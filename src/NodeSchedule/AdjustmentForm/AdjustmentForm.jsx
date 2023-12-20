import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdjustmentNodeLink from "./AdjustmentNodeLink";
import MapWithDirection from "../../Public/Map/MapWithDirection";
import GetRouteAndRandomPoints from "../../Public/Methods/GetRouteAndRandomPoints";
import RandomPointsGetRandomAttractions from "../../Public/Methods/RandomPointsGetRandomAttractions";

const AdjustmentForm = ({
  setIsAllFilled,
  begin,
  end,
  nodeNum,
  setFinalNodes,
}) => {
  const [attractions, setAttractions] = useState([]);
  const [fiveAttractions, setFiveAttractions] = useState([]);
  useEffect(() => {
    if (window.google && window.google.maps) {
      async function getRandomAttractions(begin, end, nodeNum) {
        const randomPoints = await GetRouteAndRandomPoints(begin, end, nodeNum);
        const { allAttractions, pickFirstOne } =
          await RandomPointsGetRandomAttractions(begin, end, randomPoints);
        await setFiveAttractions([[{}], ...allAttractions, [{}]]);
        await setFinalNodes([begin, ...allAttractions, end]);
        await setAttractions(pickFirstOne);
        await setIsAllFilled(true);
      }
      getRandomAttractions(begin, end, nodeNum);
    } else {
      console.error("Google Maps API not loaded");
    }
  }, [begin, end, nodeNum]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Typography variant="h6" gutterBottom>
        調整各個節點
      </Typography>
      <AdjustmentNodeLink
        nodeNum={nodeNum}
        begin={begin}
        end={end}
        fiveAttractions={fiveAttractions}
        setFiveAttractions={setFiveAttractions}
      />
      <MapWithDirection begin={begin} end={end} waypoints={attractions} />
    </Box>
  );
};

export default AdjustmentForm;
