import React, {useContext, useEffect, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center, Box} from "@chakra-ui/react"

export const BoardView = () => {
        const {getResults, error, isPending} = useContext(GameDataContext);
        const checkGivenNumber = () => true;
        const result = 5;
        const endOfGameTime = 5;
        const board = [93, 67, 59, 86, 54, 22, 37, 47, 39, 83, 18, 73, 55, 23, 97, 42, 44, 80, 12, 43, 36, 81, 26, 25, 98, 77, 96, 49,
            19, 14, 27, 72, 8, 11, 88, 64, 30, 10, 17, 58, 84, 52, 33, 21, 61, 48, 20, 71, 3, 66, 75, 76, 85, 45,
            41, 16, 9, 29, 70, 60, 87, 15, 78, 74, 90, 91, 68, 4, 32, 40, 13, 82, 6, 34, 0,
            56, 63, 5, 94, 57, 89, 31, 24, 51, 53, 92, 65, 35, 79, 69, 50, 95, 2, 7, 38, 1, 46, 99, 28, 62
        ]

        const [clicked, setClicked] = useState(0);
        useEffect(() => {
                window.addEventListener("keydown", removeFindOption)
                return (() => {
                    window.removeEventListener("keydown", removeFindOption);
                })
            }
        );
        const countNumberOfClicks = () => {
            setClicked(prev => prev + 1);
        }


        const removeFindOption = (e) => {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
            }
        };

        return (
            <Center>

                <Box onClick={countNumberOfClicks}
                     backgroundColor="rgba(0,0,0,0.5)"
                     zIndex="2"
                >
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
                                     clicked={clicked}
                        />
                        {error && <p> {error} </p>}
                        {isPending && <Spinner/>}
                        <GameBoard board={board}
                                   checkGivenNumber={checkGivenNumber}
                        />
                    </Flex>
                </Box>
            </Center>
        )
    }
;