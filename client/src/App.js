import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Components/Login/LoginPage";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <Navbar />
      <Layout />
      <LoginPage/>
    </div>
  );
}

export default App;
