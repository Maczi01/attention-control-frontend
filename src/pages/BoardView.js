import React, {useContext, useEffect} from "react";
import {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center} from "@chakra-ui/react"

export const BoardView = () => {
        const {gameData, checkGivenNumber, result, getResults, error, isPending} = useContext(GameDataContext);
        const {board, endOfGameTime} = gameData;

    useEffect(() => {
            window.addEventListener("keydown", e => {
                if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                    e.preventDefault();
                }
            })
        }
    );


        return (
            <Center>
                <Flex direction="column"
                      align="center"
                      justify="space-around"
                      width="80%"
                      backgroundColor="#ffd803"
                      mx="auto"
                >

                    <GameCounter endOfGameTime={endOfGameTime}
                                 result={result}
                                 getResults={getResults}
                    />
                    {error && <p> {error} </p>}
                    {isPending && <Spinner/>}
                    <GameBoard board={board}
                               checkGivenNumber={checkGivenNumber}
                    />
                </Flex>
            </Center>
        )
    }
;