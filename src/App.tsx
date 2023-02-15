import React, {useEffect, useState} from "react";
import {Navigate, Routes} from 'react-router';
import {Route, Outlet, Link} from "react-router-dom";
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import {ResultView} from "./pages/ResultView";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme/theme";
// import {LoginPage} from "./pages/LoginPage";
import {ProtectedPage} from "./pages/ProtectedPage";
import GameDataProvider from "./context/GameDataContext";
import {ResultDetailsView} from "./pages/ResultDetailsView";

const App: React.FC = () => {
    return (
        <>
            <ChakraProvider theme={theme}>
                <GameDataProvider>
                    <Routes>
                        <Route path="/" element={<MainView/>}/>
                        <Route path="/game" element={<BoardView/>}/>
                        <Route path="/results" element={<ResultView/>}/>
                        {/*<Route path="/signin" element={LoginPage}/>*/}
                        {/*<Route path="/playersresult/:id" element={<ResultDetailsView/>}/>*/}
                        <Route path="/protected" element={<ProtectedPage/>}/>
                    </Routes>
                </GameDataProvider>
            </ChakraProvider>
        </>
    )
}

export default App;
