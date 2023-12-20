import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { initAutocomplete } from "../Methods/initAutocomplete.ts";
const SearchBox = ({ isBegin, setLocation, isValid }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    initAutocomplete(inputRef.current, setLocation);
  }, [setLocation]);

  return (
    <>
      <TextField
        label={`${isBegin ? "起點" : "終點"}`}
        variant="outlined"
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
        inputRef={inputRef}
        error={!isValid}
        helperText={isValid || "請輸入台灣地址"}
      />
    </>
  );
};

export default SearchBox;
