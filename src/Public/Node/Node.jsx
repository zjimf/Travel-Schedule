import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Zoom from "@mui/material/Zoom";

function Node({ index, len, begin, end, finalNodes, canAdjust, delay }) {
  const [info, setInfo] = useState("");
  useEffect(() => {
    if (index === 0) setInfo(begin ? begin.formatted_address : "-");
    else if (index === len - 1) setInfo(end ? end.formatted_address : "-");
    else
      setInfo(
        finalNodes && finalNodes.length > 0 ? (
          canAdjust ? (
            finalNodes[index][0].name
          ) : (
            finalNodes[index - 1].name
          )
        ) : (
          <CircularProgress disableShrink />
        )
      );
  }, [begin, end, finalNodes]);
  return (
    <Zoom in={true} style={{ transitionDelay: `${delay}ms` }}>
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "10px",
          margin: "10px",
          padding: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        {info}
      </Box>
    </Zoom>
  );
}

export default Node;
