import React from "react";
import Node from "../../Public/Node/Node";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AltNode from "./AltNode";

const AdjustmentNodeLink = ({
  nodeNum,
  begin,
  end,
  fiveAttractions,
  setFiveAttractions,
}) => {
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
      }}
    >
      <Stack direction="row" spacing={5}>
        {nodesArray.map((index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "begin",
            }}
            key={index}
          >
            <Node
              key={index}
              index={index}
              len={nodesArray.length}
              begin={begin}
              end={end}
              finalNodes={fiveAttractions === [] ? [] : fiveAttractions}
              flag={true}
            />
            {fiveAttractions[index] !== undefined ? (
              <AltNode
                key={index + 10}
                column={index}
                fiveAttractions={fiveAttractions}
                setFiveAttractions={setFiveAttractions}
              />
            ) : (
              ""
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AdjustmentNodeLink;
