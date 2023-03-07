import React from "react";
import { useState } from "react";
import { Grid, Paper, Stack, Button } from "@mui/material";
import { useQuery } from "react-query";
import { fetchAssets } from "../../api/itemApi";

function ItemContainer() {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["item", page], () => fetchAssets(page));

  const handlePrevClick = () => setPage((prevPage) => prevPage - 1);
  const handleNextClick = () => setPage((prevPage) => prevPage + 1);

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div>
        {data.slice(startIndex, endIndex).map((item) => (
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
      <div
        style={{
          marginTop: "10px",
          display: "flex",
        }}
      >
        <Button
          style={{
            marginLeft: "24px",
            color: "white",
            backgroundColor: "#134991",
          }}
          variant="contained"
          disabled={page === 1}
          onClick={handlePrevClick}
        >
          Prev
        </Button>

        <Button
          style={{
            marginLeft: "24px",
            color: "white",
            backgroundColor: "#134991",
          }}
          variant="contained"
          disabled={page === Math.ceil(data.length / 10)}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default ItemContainer;
