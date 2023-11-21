import React from "react";
import Box from "@mui/material/Box";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBar from "material-ui-search-bar";

const ToolBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        p: 1,
        m: 1,
        bgcolor: "#f3f4f9",
        borderRadius: 1,
      }}
    >
      <SearchBar
        onChange={(value) => {}}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          maxWidth: 800,
        }}
      />
      <FilterListIcon sx={{ margin: "0px 20px 0 20px", cursor: "pointer" }} />
    </Box>
  );
};

export default ToolBox;
