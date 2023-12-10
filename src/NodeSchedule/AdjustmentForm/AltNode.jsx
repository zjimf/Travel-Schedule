import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const AltNode = ({ column, fiveAttractions, setFiveAttractions }) => {
  const handleListItemClick = (event, column, row) => {
    const newFiveAttractions = [...fiveAttractions];
    [newFiveAttractions[column][0], newFiveAttractions[column][row]] = [
      newFiveAttractions[column][row],
      newFiveAttractions[column][0],
    ];
    setFiveAttractions(newFiveAttractions);
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        {fiveAttractions[column].map((attraction, row) =>
          row !== 0 ? (
            <ListItem disablePadding key={row}>
              <ListItemButton
                onClick={(event) => handleListItemClick(event, column, row)}
              >
                <ListItemText primary={attraction.name} />
              </ListItemButton>
            </ListItem>
          ) : (
            ""
          )
        )}
      </List>
    </>
  );
};

export default AltNode;
