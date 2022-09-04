import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Tributes from "./pages/Tributes";
import TributeDetail from "./pages/TributeDetail";
import Events from "./pages/Events";
import Maps from "./pages/Maps";
import Items from "./pages/Items";
import Games from "./pages/Games";

const App = () => (
    <StrictMode>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tributes" element={<Tributes />}></Route>
                <Route path="/tributes/:id" element={<TributeDetail />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/maps" element={<Maps />}></Route>
                <Route path="/items" element={<Items />}></Route>
                <Route path="/games" element={<Games />}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

export default App;
