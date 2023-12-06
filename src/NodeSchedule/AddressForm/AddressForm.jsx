import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (begin !== null && end !== null && nodeNum != null) setIsAllFilled(true);
  }, [begin, end, nodeNum]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Start / End points
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBox isBegin={true} setLocation={setBegin} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {begin ? begin.formatted_address : ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBox isBegin={false} setLocation={setEnd} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {end ? end.formatted_address : ""}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MapWithDirection begin={begin} end={end} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            The number of nodes you want
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="1~10"
            variant="outlined"
            type="text"
            inputRef={inputRef}
            onChange={(e) => {
              setNodeNum(e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
