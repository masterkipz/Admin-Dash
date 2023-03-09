import { Grid, Paper, Stack } from "@mui/material";
import React from "react";

const ItemHeaderContainer = () => {
  return (
    <Stack alignItems="center">
      <Paper
        style={{
          backgroundColor:"#0f1d3f",
          height: "40px",
          width: "100%",
        }}
        variant="outlined"
        elevation={0}
      >
        <Grid
          container
          spacing={2}
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "0.8rem",
          }}
        >
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Property ID
          </Grid>
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Classification
          </Grid>
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Item/Brand/Model
          </Grid>
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Serial Number
          </Grid>
          <Grid item md={1} lg={1} style={{ marginTop: "10px" }}>
            Cost
          </Grid>
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Aquisition Date
          </Grid>
          <Grid item md={1} lg={1.5} style={{ marginTop: "10px" }}>
            Location
          </Grid>
          <Grid item md={1} lg={2} style={{ marginTop: "10px" }}>
            Person Accountable
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default ItemHeaderContainer;
