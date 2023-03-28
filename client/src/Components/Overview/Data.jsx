import { Paper, Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { fetchItem } from "../../api/itemApi";
import { fetchUser } from "../../api/userApi";

function Data() {
  const { data: items } = useQuery("items", fetchItem);
  const { data: user } = useQuery("user", fetchUser);

  return (
    <Paper
      sx={{
        backgroundColor: "#041C32",
        height: "320px",
        width: "100%",
        marginTop: "30px",
        marginBottom: "15px",
        "@media (max-width:600px)": {
          marginTop: "10px",
          marginBottom: "5px",
        },
        borderRadius: "20px",
      }}
    >
      <Typography
        marginTop="20px"
        textAlign="center"
        variant="h5"
        fontWeight="bold"
        color="#f0f0f0"
      >
        Database Overview
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            border: "3px solid",
            height: "200px",
            width: "150px",
            borderRadius: "20px",
            p: "10px",
          }}
        >
          <Typography
            textAlign="center"
            fontWeight="regular"
            fontStyle="italic"
            variant="h5"
          >
            Total Users
          </Typography>
          <Typography textAlign="center" variant="h1">
            {user && user.length}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            border: "3px solid",
            height: "200px",
            width: "150px",
            borderRadius: "20px",
            p: "10px",
          }}
        >
          <Typography
            textAlign="center"
            fontWeight="regular"
            fontStyle="italic"
            variant="h5"
          >
            Total Items
          </Typography>
          <Typography textAlign="center" variant="h1">
            {items && items.length}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Data;
