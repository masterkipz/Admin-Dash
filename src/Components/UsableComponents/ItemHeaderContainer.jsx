import { Grid, Paper, Stack } from "@mui/material";
import React from "react";

const ItemHeaderContainer = () => {
  return (
    <Stack alignItems="center">
      <Paper
        style={{
          height: "40px",
          width: "90%",
        }}
        variant="outlined"
        elevation={3}
      >
        <Grid
          container
          spacing={2}
          style={{
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          <Grid item lg={1} style={{marginTop:"8px"}}>
            ID
          </Grid>
          <Grid item lg={3} style={{marginTop:"8px"}}>
            Product Name
          </Grid>
          <Grid item lg={3} style={{marginTop:"8px"}}>
            Serial Number
          </Grid>
          <Grid item lg={3} style={{marginTop:"8px"}}>
            Type
          </Grid>
          <Grid item lg={2} style={{marginTop:"8px"}}>
            Cost
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default ItemHeaderContainer;
