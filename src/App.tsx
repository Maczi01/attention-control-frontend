import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import GameDataProvider from "./context/GameDataContext";
import {SaveResultView} from "./pages/SaveResultView";
import {ResultView} from "./pages/ResultView";
import {ResultDetailsView} from "./pages/ResultDetailsView";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme/theme";

const App: React.FC = () => (
    <>
        <Router>
            <ChakraProvider theme={theme}>
                <Switch>
                    <GameDataProvider>
                        <Route exact path="/" component={MainView}/>
                        <Route path="/game" component={BoardView}/>
                        <Route path="/save" component={SaveResultView}/>
                        <Route path="/results" component={ResultView}/>
                        <Route path="/playersresult/:id" component={ResultDetailsView}/>
                    </GameDataProvider>
                </Switch>
            </ChakraProvider>
        </Router>
    </>
);

export default App;
