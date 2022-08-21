import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import GameDataProvider from "./context/GameDataContext";
import {ResultView} from "./pages/ResultView";
import {ResultDetailsView} from "./pages/ResultDetailsView";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme/theme";
import {LoginPage} from "./pages/LoginPage";
import {ProtectedPage} from "./pages/ProtectedPage";
import ProtectedRoute from "./components/ProtectedRoutes";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <ChakraProvider theme={theme}>
                    <Switch>
                        <GameDataProvider>
                            <Route exact path="/" component={MainView}/>
                            <Route path="/game" component={BoardView}/>
                            <Route path="/results" component={ResultView}/>
                            <Route path="/signin" component={LoginPage}/>
                            <Route path="/playersresult/:id" component={ResultDetailsView}/>
                            <ProtectedRoute>
                                <Route path="/protected" component={ProtectedPage}/>
                            </ProtectedRoute>
                        </GameDataProvider>
                    </Switch>
                </ChakraProvider>
            </Router>
        </>
    )
}

export default App;
