import Layout from "./Components/Layout";
import LoginPage from "./Components/Login/LoginPage";
import NoUser from "./Components/Error/NoUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { fetchUser } from "./api/userApi";
import { UserContext } from "./store/userContext";
import { useState, useEffect } from "react";
import ManageUser from "./Components/ManageUser/ManageUser";

function App() {
  const { data: user } = useQuery("user", fetchUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [userFoundState, setUserFoundState] = useState(
    localStorage.getItem("userFoundState") || null
  );
  const [userRoleState, setUserRoleState] = useState(
    localStorage.getItem("userRoleState") || null
  );

  useEffect(() => {
    if (location.pathname === "/") {
      setUserFoundState(null);
      localStorage.removeItem("userFoundState"); // Remove userFoundState from localStorage
    } else {
      localStorage.setItem("userFoundState", userFoundState);
    }
  }, [userFoundState, location]);

  useEffect(() => {
    if (location.pathname === "/") {
      setUserRoleState(null);
      localStorage.removeItem("userRoleState"); // Remove userRoleState from localStorage
    } else {
      localStorage.setItem("userRoleState", userRoleState);
    }
  }, [userRoleState, location]);

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
        toast.success("Welcome Super Admin User");
      } else {
        toast.success(
          "Welcome " +
            username.value.charAt(0).toUpperCase() +
            username.value.slice(1)
        );
      }
    }
    setUserFoundState(userFound.username);
    setUserRoleState(userFound.role);
    // If both username and password are correct, navigate to the dashboard
    navigate("/dashboard");
  };
  // console.log(userFoundState); // Test if username is stored correctly
  // console.log(userRoleState); // Test if username is stored correctly

  return (
    <div>
      <UserContext.Provider
        value={{
          userFoundState,
          setUserFoundState,
          userRoleState,
          setUserRoleState,
        }}
      >
        <ToastContainer position="bottom-left" autoClose={3000} />
        <Routes>
          <Route path="/" element={<LoginPage handleSubmit={handleSubmit} />} />
          <Route
            path="/error_missing_user_cant_access_dashboard"
            element={<NoUser />}
          />
          <Route
            path="/dashboard"
            element={
              userFoundState ? (
                <Layout />
              ) : (
                <Navigate to="/error_missing_user_cant_access_dashboard" />
              )
            }
          />
          <Route
            path="/manage_user"
            element={
              userFoundState ? (
                <ManageUser />
              ) : (
                <Navigate to="/error_missing_user_cant_access_dashboard" />
              )
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
