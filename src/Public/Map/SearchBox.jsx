import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { initAutocomplete } from "../Methods/initAutocomplete.ts";
const SearchBox = ({ isBegin, setLocation }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    initAutocomplete(inputRef.current, setLocation);
  }, [setLocation]);

  return (
    <>
      <TextField
        label={`${isBegin ? "Start" : "End"}`}
        variant="outlined"
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
        inputRef={inputRef}
      />
    </>
  );
};

export default SearchBox;
