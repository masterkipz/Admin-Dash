import React from 'react'
import { Grid, Paper, Stack } from "@mui/material";

function ItemContainer() {
    return (
        <Stack alignItems="center" marginTop="10px">
          <Paper
            style={{
              height: "40px",
              width: "90%",
            }}
            variant="outlined"
          >
            <Grid
              container
              spacing={2}
              style={{
                textAlign: "center",
              }}
            >
              <Grid item lg={1} style={{marginTop:"8px"}}>
                1
              </Grid>
              <Grid item lg={3} style={{marginTop:"8px"}}>
                Desktop Computer
              </Grid>
              <Grid item lg={3} style={{marginTop:"8px"}}>
                MSJDK12SDFJ83
              </Grid>
              <Grid item lg={3} style={{marginTop:"8px"}}>
                Hardware
              </Grid>
              <Grid item lg={2} style={{marginTop:"8px"}}>
                $3500
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      );
    };

export default ItemContainer