import React, {useContext} from "react";
import GameDataProvider, {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";

export const BoardView = () => {
    const {gameData, checkGivenNumber, result, getResults} = useContext(GameDataContext);
    const {board, endOfGameTime} = gameData
    return (
        <>
            <GameBoard table={board}
                       checkGivenNumber={checkGivenNumber}
            />
            <GameCounter endOfGameTime={endOfGameTime}
                         result={result}
                         getResults={getResults}
            />
        </>
    )
}

