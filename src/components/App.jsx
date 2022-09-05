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

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #2F3037;
        color: white;
    }
`;

const App = () => (
    <StrictMode className="test">
        <GlobalStyle />
        <BrowserRouter>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/tributes" element={<Tributes />}></Route>
                    <Route
                        path="/tributes/:id"
                        element={<TributeDetail />}
                    ></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/maps" element={<Maps />}></Route>
                    <Route path="/items" element={<Items />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    </StrictMode>
);

export default styled(App)`
    .layout-wrapper {
        display: flex;
        flex-direction: row;
    }
`;
