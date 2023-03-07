import React from "react";
import { Grid, Paper, Stack } from "@mui/material";
import { useQuery } from "react-query";
import { fetchAssets } from "../../api/itemApi";

function ItemContainer() {
  const { data, status } = useQuery("item", fetchAssets);

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <Stack alignItems="center" marginTop="10px">
          <Paper
            style={{
              height: "40px",
              width: "100%",
            }}
            variant="outlined"
          >
            <Grid
              container
              spacing={2}
              style={{
                textAlign: "center",
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            >
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.propertyNumber}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.assetClassification}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.brand}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.serialNumber}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.aquisitionCost}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.aquisitionDate}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.location}
              </Grid>
              <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                {item.personAccountable}
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      ))}
    </div>
  );
}

export default ItemContainer;
