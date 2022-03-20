import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Veiculos from "./pages/veiculos/Veiculos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/veiculos/:tipo/:id" element={<Veiculos/>}/>
        </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
