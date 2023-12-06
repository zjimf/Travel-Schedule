import React from "react";
import Node from "./Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const NodeLink = ({ nodeNum, begin, end }) => {
  const nodesArray = Array.from({ length: nodeNum }, (_, index) => index);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflowY: "auto",
        marginLeft: "30px",
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
          />
        ))}
      </Stack>
    </Box>
  );
};

export default NodeLink;
