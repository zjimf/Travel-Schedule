import React from "react";
import Node from "./Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const NodeSchedule = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 430px)": {
          display: "none",
        },
      }}
    >
      <Stack direction="row" spacing={5}>
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
      </Stack>
    </Box>
  );
};

export default NodeSchedule;
