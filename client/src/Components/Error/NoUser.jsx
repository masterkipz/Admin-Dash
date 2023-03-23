import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const NoUser = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "100px" }}>
      <Typography variant="h1" fontWeight="bold" color="red">
        NO USER FOUND
      </Typography>
      <Typography variant="h3" fontWeight="bold" color="#041C32">
        404 error
      </Typography>
      <Typography
        fontSize="20px"
        maxWidth="md"
        sx={{ marginTop: "30px" }}
        color="#041C32"
      >
        Uh oh, it looks like you've stumbled upon a page that doesn't exist in
        this dimension. We apologize for the inconvenience, but it seems that
        whatever you were looking for has vanished into the abyss. Please check
        the URL for any typos or try searching for what you need using our
        website's search bar. If all else fails, you can always reach out to our
        support team for further assistance.
      </Typography>
    </Container>
  );
};

export default NoUser;
