import React, {useContext, useEffect, useState} from "react";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center, Box} from "@chakra-ui/react"
import {ModalOverlay} from "@chakra-ui/modal";
import {useDisclosure} from "@chakra-ui/hooks";
import {GameDataContext} from "../context/GameDataContext";
import {useGameStore} from "../store/gameStore";

export const BoardView: React.FC = () => {

        const gameTimeInSeconds = useGameStore(state => state.gameTimeInSeconds);

        const [clicked, setClicked] = useState<number>(0);
        const [points, setPoints] = useState<number>(0);
        const [currentNumber, setCurrentNumber] = useState<number>(0);
        const [board, setBoard] = useState<number[]>([]);
        console.log({currentNumber})
        const checkGivenNumber = (number: number) => {
            if (number === currentNumber) {
                setCurrentNumber(c => c + 1);
                setPoints(c => c + 1);
                return true;
            } else {
                return false;
            }
        };

        const countNumberOfClicks = () => {
            setClicked(prev => prev + 1);
        }

        const removeFindKeyShortcut = (e: { keyCode: number; ctrlKey: any; preventDefault: () => void; }) => {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
            }
        };

        useEffect(() => {
            const map = Array(100).fill(0).map((_, idx) => idx);
            // @ts-ignore
            setBoard(map.sort(() => Math.random() - 0.5))
        }, []);

        useEffect(() => {
            window.addEventListener("keydown", removeFindKeyShortcut)
            return (() => {
                window.removeEventListener("keydown", removeFindKeyShortcut);
            })
        });

        // @ts-ignore
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
