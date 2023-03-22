import {
  ButtonBase,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import dictLogo from "../.././Images/DICT-Logo-only.png";
import dictLogoWhite from "../.././Images/DICT-Logo-White.png";
import React from "react";
import { useState, useEffect } from "react";
import ForgotPasswordModal from "../Modal/ForgotPasswordModal";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../api/userApi";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { UserContext } from "../../store/userContext";

const LoginPage = () => {
  const { data: user } = useQuery("user", fetchUser);
  const [userFoundState, setUserFoundState] = useState(null);
  const [openForgotPrompt, setOpenForgotPrompt] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    const userFound = user.find((user) => user.username === username.value);
    if (!userFound) {
      toast.error("Invalid Username");
      return;
    }

    // Check if the password is correct
    if (userFound.password !== password.value) {
      toast.error("Invalid Password");
      return;
    } else {
      if (userFound.role === "superadmin") {
        toast.success("Welcom Super Admin User");
      } else {
        toast.success(
          "Welcome " +
            username.value.charAt(0).toUpperCase() +
            username.value.slice(1)
        );
      }
    }
    setUserFoundState(userFound);
    // If both username and password are correct, navigate to the dashboard
    navigate("/dashboard");
  };

  const handleOpenForgotPrompt = () => {
    setOpenForgotPrompt(true);
  };

  const handleCloseForgotPrompt = () => {
    setOpenForgotPrompt(false);
  };

  return (
    <UserContext.Provider value={userFoundState}>
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ForgotPasswordModal
          openForgotPrompt={openForgotPrompt}
          handleCloseForgotPrompt={handleCloseForgotPrompt}
        />
        <Paper
          sx={{
            height: "800px",
            width: "100%",
            backgroundColor: "#041C32",
            borderRadius: "20px",
            "@media(max-width:375px)": {
              marginTop: "150px",
              height: "750px",
            },
          }}
        >
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              flexDirection: window.innerWidth < 500 ? "column" : "row",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "200px",
                height: "200px",
                position: "relative",
                left: window.innerWidth < 500 ? "0" : "30px",
              }}
              src={dictLogo}
              alt="DICT Logo"
            />
            <img
              style={{ width: "300px", height: "200px" }}
              src={dictLogoWhite}
              alt="DICT Logo White"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                marginTop: window.innerWidth < 500 ? "0" : "100px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              <TextField
                type="text"
                required
                autoComplete="off"
                InputLabelProps={{ style: { color: "#F0F0F0" } }}
                InputProps={{ style: { color: "#F0F0F0" } }}
                label="Username"
                variant="outlined"
                sx={{
                  margin: "5px",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#3E497A",
                    },
                  "&  .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F0F0F0",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#F0F0F0",
                    },
                  },
                }}
                name="username"
                id="username"
              />
              <TextField
                required
                type="password"
                autoComplete="off"
                InputLabelProps={{ style: { color: "#F0F0F0" } }}
                InputProps={{ style: { color: "#F0F0F0" } }}
                label="Password"
                variant="outlined"
                sx={{
                  margin: "5px",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#3E497A",
                    },
                  "&  .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F0F0F0",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#F0F0F0",
                    },
                  },
                }}
                name="password"
                id="password"
              />
              <ButtonBase
                onClick={() => handleOpenForgotPrompt()}
                disableRipple
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography fontStyle="italic" sx={{ color: "#F0F0F0" }}>
                  Forgot Password?
                </Typography>
              </ButtonBase>

              <ButtonBase
                type="submit"
                sx={{
                  backgroundColor: "#F0F0F0",
                  height: "50px",
                  borderRadius: "20px",
                  marginLeft: "100px",
                  marginRight: "100px",
                  margin: "50px",
                }}
              >
                <Typography fontSize="20px" fontWeight="bold">
                  LOGIN
                </Typography>
              </ButtonBase>
            </div>
          </form>
        </Paper>
      </Container>
    </UserContext.Provider>
  );
};

export default LoginPage;
