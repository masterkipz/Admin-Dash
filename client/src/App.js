import Layout from "./Components/Layout";
import LoginPage from "./Components/Login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
