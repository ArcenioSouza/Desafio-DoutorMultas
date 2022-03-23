import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Vehicles from "./pages/vehicles/Vehicles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/veiculos/:tipo/:id" element={<Vehicles/>}/>
        </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
