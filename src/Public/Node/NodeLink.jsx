import React from "react";
import Node from "./Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const NodeLink = ({ nodeNum, begin, end }) => {
  const len = parseInt(nodeNum) + 2;
  const nodesArray = Array.from({ length: len }, (_, index) => index);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflowY: "auto",
        marginY: "30px",
        "@media (max-width: 430px)": {
          display: "none",
        },
      }}
    >
      <Stack direction="row" spacing={5}>
        {nodesArray.map((index) => (
          <Node
            key={index}
            index={index}
            len={nodesArray.length}
            begin={begin}
            end={end}
            fiveAttractions={[]}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default NodeLink;
