import React, {useContext, useEffect, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center, Box} from "@chakra-ui/react"
import {ModalOverlay} from "@chakra-ui/modal";
import {useDisclosure} from "@chakra-ui/hooks";

export const BoardView = () => {
        const {gameData, result, getResults, error, isPending, gameTimeInSeconds} = useContext(GameDataContext);
        // const {gameTime} = gameData;
        const [clicked, setClicked] = useState(0);
        const [points, setPoints] = useState(0);
        const [currentNumber, setCurrentNumber] = useState(0);
        const [board, setBoard] = useState([]);
        console.log(currentNumber)
        const checkGivenNumber = (number) => {
            if (number === currentNumber) {
                setCurrentNumber(c => c + 1);
                setPoints(c => c + 1);
                return true;
            }
        };

        const countNumberOfClicks = () => {
            setClicked(prev => prev + 1);
            console.log("Clicked in overlay!")
        }

        const removeFindOption = (e) => {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
            }
        };

    useEffect(() => {
        const map = Array(100).fill().map((_, idx) => idx);
        setBoard(map.sort(() => Math.random() - 0.5))
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", removeFindOption)
        return (() => {
            window.removeEventListener("keydown", removeFindOption);
        })
    });

        return (
            <Center>
                <Box onClick={countNumberOfClicks}
                     zIndex="1"
                >
                    <Flex direction="column"
                          align="center"
                          height="100vw"
                          backgroundColor="tertiary"
                          mx="auto"
                          px="20px"
                    >
                        <GameCounter gameTimeInSeconds={gameTimeInSeconds}
                                     result={result}
                                     getResults={getResults}
                                     clicked={clicked}
                                     board={board}
                                     points={points}
                        />
                        <GameBoard board={board}
                                   checkGivenNumber={checkGivenNumber}
                        />
                    </Flex>
                </Box>
            </Center>
        )
    }
;
