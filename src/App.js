import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Inventory from "./Components/Inventory";
import Help from "./Components/Help";

function App() {
  return (
    <div>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/inventory" element={<Inventory />}/>
      <Route path="/help" element={<Help />}/>
    </Routes>
    </div>
  );
}

export default App;
