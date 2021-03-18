import GameBoard from "../components/GameBoard";
import React from "react";
import {AppContext} from "../context/context";
import GameCounter from "../components/GameCounter";

export const BoardView = () => (
    <AppContext.Consumer>
        {(contextElements) =>
            <>
                <GameBoard table={contextElements.board}
                           checkGivenNumber={contextElements.checkGivenNumber}
                />
                <GameCounter endOfGameTime={contextElements.endOfGameTime}
                             result={contextElements.result}
                             getResults={contextElements.getResults}
                />
            </>
        }
    </AppContext.Consumer>
);