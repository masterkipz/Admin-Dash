import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useQuery } from "react-query";
import { fetchUser } from "../../api/userApi";

const ManagePage = () => {
  const { data: user, isLoading, isError } = useQuery("user", fetchUser);

  if (isLoading) {
    return <div>Loading User...</div>;
  }

  if (isError) {
    return <div>Error Loading User...</div>;
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
      <Paper
        sx={{
          backgroundColor: "#041C32",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography
          color="#F0F0F0"
          variant="h4"
          fontWeight="bold"
          marginLeft="20px"
        >
          User Management
        </Typography>
        <Typography
          color="#F0F0F0"
          variant="h6"
          sx={{ opacity: "0.6", marginRight: "20px" }}
        >
          Authorization is required before creating a new user account
        </Typography>
      </Paper>

      <TableContainer component={Paper} sx={{ backgroundColor: "#f0f0f0" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last login time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user &&
              user.map((users) => (
                <TableRow key={users.userId}>
                  <TableCell sx={{ color: "#041C32", fontStyle: "italic" }}>
                    {users.username}
                  </TableCell>
                  <TableCell sx={{ color: "#041C32", fontStyle: "italic" }}>
                    {users.password}
                  </TableCell>
                  <TableCell sx={{ color: "#041C32", fontStyle: "italic" }}>
                    {users.last_login_time}
                  </TableCell>
                  <TableCell sx={{ color: "#041C32", fontStyle: "italic" }}>
                    {users.role}
                  </TableCell>
                  <TableCell sx={{ color: "#041C32", fontStyle: "italic" }}>
                    {users.status}
                  </TableCell>
                  <TableCell>Buttons</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManagePage;
