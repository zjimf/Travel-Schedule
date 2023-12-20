import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBox from "../../Public/Map/SearchBox";
import TextField from "@mui/material/TextField";
import MapWithDirection from "../../Public/Map/MapWithDirection";

const AddressForm = ({
  setIsAllFilled,
  setBegin,
  setEnd,
  begin,
  end,
  nodeNum,
  setNodeNum,
}) => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const [beginIsValid, setBeginIsValid] = useState(true);
  const [endIsValid, setEndIsValid] = useState(true);

  useEffect(() => {
    setBegin(null);
    setEnd(null);
    setNodeNum(null);
    setIsAllFilled(false);
  }, []);

  useEffect(() => {
    if (begin !== null)
      begin.formatted_address.includes("台灣")
        ? setBeginIsValid(true)
        : setBeginIsValid(false);

    if (end !== null)
      end.formatted_address.includes("台灣")
        ? setEndIsValid(true)
        : setEndIsValid(false);

    begin !== null && end !== null && nodeNum !== null && isValid
      ? setIsAllFilled(true)
      : setIsAllFilled(false);
  }, [begin, end, nodeNum, isValid]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValidNumber = /^\d+$/.test(value) && value >= 1 && value <= 10;

    setIsValid(isValidNumber);
    setNodeNum(isValidNumber ? value : null);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            請輸入起點與終點
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBox
            isBegin={true}
            setLocation={setBegin}
            isValid={beginIsValid}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {begin && beginIsValid ? begin.formatted_address : "-"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBox
            isBegin={false}
            setLocation={setEnd}
            isValid={endIsValid}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            {end && endIsValid ? end.formatted_address : "-"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MapWithDirection begin={begin} end={end} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            你想在起點與終點中塞入幾個節點
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="1~10"
            variant="outlined"
            type="text"
            inputRef={inputRef}
            onChange={handleInputChange}
            error={!isValid}
            helperText={isValid || "請輸入範圍1到10的數字"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
