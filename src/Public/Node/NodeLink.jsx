import React from "react";
import Node from "./Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const NodeLink = ({ schedule, canAdjust }) => {
  const { begin, end, finalNodes } = schedule;
  const len = parseInt(finalNodes.length + 2);
  const nodesArray = Array.from({ length: len }, (_, index) => index);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflowY: "auto",
        marginY: "30px",
      }}
    >
      <Stack direction="row" spacing={5}>
        {nodesArray.map((index) => (
          <Node
            key={index}
            index={index}
            len={len}
            begin={begin}
            end={end}
            finalNodes={finalNodes}
            canAdjust={canAdjust}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default NodeLink;
