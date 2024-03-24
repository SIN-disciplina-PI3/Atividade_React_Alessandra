import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ods from "./pages/Ods";
import Sobre from "./pages/Sobre";

function AppRoutes() {
  return (
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Ods" element={<Ods/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}></Route>
            </Routes>
        </BrowserRouter>
  );
}

export default AppRoutes;