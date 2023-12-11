import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Node({ index, len, begin, end, finalNodes }) {
  const [info, setInfo] = useState("");
  useEffect(() => {
    if (index === 0) setInfo(begin ? begin.formatted_address : "-");
    else if (index === len - 1) setInfo(end ? end.formatted_address : "-");
    else
      setInfo(
        finalNodes && finalNodes.length > 0 ? (
          finalNodes[index][0].name
        ) : (
          <CircularProgress disableShrink />
        )
      );
  }, [begin, end, finalNodes]);
  return (
    <Box
      sx={{
        border: "2px solid black",
        width: "120px",
        height: "120px",
        borderRadius: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {info}
    </Box>
  );
}

export default Node;
