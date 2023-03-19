import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
