import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MapSearchbar from "../Public/Map/MapSearchbar";

export default function AddressForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Start / End points
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            xxx
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            xxx
          </Typography>
        </Grid>
        <MapSearchbar></MapSearchbar>
      </Grid>
    </>
  );
}
