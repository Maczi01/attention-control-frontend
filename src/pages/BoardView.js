import GameBoard from "../components/GameBoard";
import React, {useContext} from "react";
import {AppContext} from "../context/context";
import GameCounter from "../components/GameCounter";
import {GameContext} from "../context/GameDataProvider";

export const BoardView = () => {
        const {gameData, checkGivenNumber} = useContext(GameContext)

        return (
            <>
                <GameBoard table={gameData.board}
                           checkGivenNumber={checkGivenNumber}
                />
                <GameCounter endOfGameTime={gameData.endOfGameTime}
                    // result={contextElements.result}
                    // getResults={contextElements.getResults}
                />
            </>
        )
    }


;