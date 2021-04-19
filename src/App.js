import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import GameDataProvider from "./context/GameDataContext";
import {SaveResult} from "./pages/SaveResult";
import {ResultView} from "./pages/ResultView";
import {ResultDetailsView} from "./pages/ResultDetailsView";

const App = () => (
    <>
        <Router>
            <Switch>
                <GameDataProvider>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/game" component={BoardView}/>
                    <Route path="/save" component={SaveResult}/>
                    <Route path="/results" component={ResultView}/>
                    <Route path="/playersresult/:id" component={ResultDetailsView}/>
                </GameDataProvider>
            </Switch>
        </Router>
    </>
);

export default App;
