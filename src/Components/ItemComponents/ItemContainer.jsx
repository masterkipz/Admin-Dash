import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Stack,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "react-query";
import { fetchItem, searchItem } from "../../api/itemApi";
import ItemHeaderContainer from "./ItemHeaderContainer";

const MyInputField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
}));

function ItemContainer() {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["item", page], () => fetchItem(page));

  const [searchTerm, setProperSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handlePrevClick = () => setPage((prevPage) => prevPage - 1);
  const handleNextClick = () => setPage((prevPage) => prevPage + 1);

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchItem(searchTerm);
      setSearchResults(results);
    };

    fetchData();
  }, [searchTerm]);

  const handleProperSearchTermChange = (event) => {
    setProperSearchTerm(event.target.value);
  };

  // Filter the searchResults array to only include items that match the search term
  const filteredResults = searchResults.filter(
    (item) =>
      item.propertyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.assetClassification
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.aquisitionDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.personAccountable.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === "loading") {
    return <CircularProgress color="primary" />;
  }

  if (status === "error") {
    return (
      <div>
        <h1 style={{ color: "white" }}>Something went wrong</h1>
        <p style={{ color: "white" }}>Sorry, we couldn't fetch the data you were looking for</p>
        <p style={{ color: "white" }}>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="NavigationButtonForItemContainer"
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <div>
          <MyInputField
            style={{ backgroundColor: "white" }}
            value={searchTerm}
            onChange={handleProperSearchTermChange}
            placeholder="Search Item..."
            InputProps={{
              style: {
                fontFamily: "'Poppins', sans-serif",
                color: "white",
                borderWidth: "2px",
              },
            }}
          />
        </div>

        <Button
          style={{
            marginLeft: "24px",
            color: "white",
            backgroundColor: "orange",
          }}
          variant="contained"
        >
          Add Item
        </Button>

        <Button
          style={{
            marginLeft: "24px",
            color: "white",
            backgroundColor: "green",
          }}
          variant="contained"
        >
          Update
        </Button>

        <Button
          style={{
            marginLeft: "24px",
            color: "white",
            backgroundColor: "red",
          }}
          variant="contained"
        >
          Delete
        </Button>
        <div style={{ marginLeft: "300px" }}>
          <Button
            style={{
              marginLeft: "24px",
              color: "black",
              backgroundColor: page === 1 ? "#E1D9D1" : "white",
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
              color: "black",
              backgroundColor:
                page === Math.ceil(data.length / 10) ? "#E1D9D1" : "white",
            }}
            variant="contained"
            disabled={page === Math.ceil(data.length / 10)}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>

      <ItemHeaderContainer />
      <div>
        {filteredResults.slice(startIndex, endIndex).map((item) => (
          <Stack alignItems="center" marginTop="10px">
            <Paper
              key={item.id}
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
                  fontSize: "0.7rem",
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
                <Grid item lg={1} style={{ marginTop: "8px" }}>
                  {item.aquisitionCost}
                </Grid>
                <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                  {item.aquisitionDate}
                </Grid>
                <Grid item lg={1.5} style={{ marginTop: "8px" }}>
                  {item.location}
                </Grid>
                <Grid item lg={2} style={{ marginTop: "8px" }}>
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
      ></div>
    </>
  );
}

export default ItemContainer;
