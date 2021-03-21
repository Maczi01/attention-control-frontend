import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import GameDataProvider from "./context/GameDataContext";

const App = () => (
    <>
        <Router>
            <Switch>
                <GameDataProvider>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/game" component={BoardView}/>
                    <Route/>
                    <Route/>
                </GameDataProvider>
            </Switch>
        </Router>
    </>
);

export default App;
