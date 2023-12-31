import React from "react";
import Node from "./Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";

const NodeLink = ({ schedule, canAdjust }) => {
  const { begin, end, finalNodes } = schedule;
  const len = parseInt(finalNodes.length + 2);
  const nodesArray = Array.from({ length: len }, (_, index) => index);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflowY: "auto",
        margin: isMobile ? "10px 0 20px 0" : "30px",
        padding: "8px",
      }}
    >
      <Stack direction="row" spacing={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {nodesArray.map((index) => (
            <>
              <Node
                key={index + 5}
                index={index}
                len={len}
                begin={begin}
                end={end}
                finalNodes={finalNodes}
                canAdjust={canAdjust}
                delay={index * 300}
              />
              {index === len - 1 || (
                <KeyboardArrowRightIcon sx={{ marginX: "10px" }} key={index} />
              )}
            </>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default NodeLink;
