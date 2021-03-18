import GameBoard from "../components/GameBoard";
import React from "react";
import {AppContext} from "../context/context";

export const BoardView = () => (
    <AppContext.Consumer>
        {(contextElements) =>
            <GameBoard table={contextElements.board}/>
        }
    </AppContext.Consumer>
);