import React, {useContext, useEffect, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center, Box} from "@chakra-ui/react"
import {ModalOverlay} from "@chakra-ui/modal";
import {useDisclosure} from "@chakra-ui/hooks";

export const BoardView = () => {
        const {gameData, checkGivenNumber, result, getResults, error, isPending} = useContext(GameDataContext);
        const {board, endOfGameTime} = gameData;
        const [clicked, setClicked] = useState(0);
        // const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})

        useEffect(() => {
                window.addEventListener("keydown", removeFindOption)
                return (() => {
                    window.removeEventListener("keydown", removeFindOption);
                })
            }
        );
        const countNumberOfClicks = () => {
            setClicked(prev => prev + 1);
            console.log("Clicked in overlay!")
        }

        const removeFindOption = (e) => {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
            }
        };

        return (
            <Center>
                <Box onClick={countNumberOfClicks}
                     zIndex="1"
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
                                     board={board}
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