import { Grid, Paper, Stack } from "@mui/material";
import React from "react";

const ItemHeaderContainer = () => {
  return (
    <Stack alignItems="center">
      <Paper
        style={{
          height: "40px",
          width: "100%",
        }}
        variant="outlined"
        elevation={3}
      >
        <Grid
          container
          spacing={2}
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "0.9rem",
          }}
        >
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Property Number
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Asset Classification
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Item/Brand/Model
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Serial Number
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Aquisition Cost
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Aquisition Date
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Location
          </Grid>
          <Grid item lg={1.5} style={{ marginTop: "8px" }}>
            Person Accountable
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default ItemHeaderContainer;