import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

function Node({ index, len, begin, end }) {
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (index === 0) setInfo(begin ? begin.formatted_address : "-");
    else if (index === len - 1) setInfo(end ? end.formatted_address : "-");
    else setInfo("-");
  }, [begin, end]);

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
