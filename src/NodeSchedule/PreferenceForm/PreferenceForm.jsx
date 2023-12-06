import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NodeLink from "../../Public/Node/NodeLink";
import MapWithDirection from "../../Public/Map/MapWithDirection";
import GetRouteAndRandomPoints from "../../Public/Methods/GetRouteAndRandomPoints";
import RandomPointsGetRandomAttractions from "../../Public/Methods/RandomPointsGetRandomAttractions";

const PreferenceForm = ({ begin, end, nodeNum }) => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      async function getRandomAttractions(begin, end, nodeNum) {
        const randomPoints = await GetRouteAndRandomPoints(begin, end, nodeNum);
        // const randomAttractions = await RandomPointsGetRandomAttractions(
        //   randomPoints
        // );
        await setAttractions(randomPoints);
      }
      getRandomAttractions(begin, end, nodeNum);
    } else {
      console.error("Google Maps API not loaded");
    }
  }, [begin, end, nodeNum]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Typography variant="h6" gutterBottom>
        Adjustments
      </Typography>
      <NodeLink nodeNum={nodeNum} begin={begin} end={end} />
      <MapWithDirection begin={begin} end={end} waypoints={attractions} />
    </Box>
  );
};

export default PreferenceForm;
