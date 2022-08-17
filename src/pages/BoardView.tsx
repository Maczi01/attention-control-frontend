import React, {useContext, useEffect, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import GameBoard from "../components/GameBoard";
import GameCounter from "../components/GameCounter";
import {Flex, Spinner, Center, Box} from "@chakra-ui/react"
import {ModalOverlay} from "@chakra-ui/modal";
import {useDisclosure} from "@chakra-ui/hooks";

export const BoardView: React.FC = () => {
        // @ts-ignore
    const {result, gameTimeInSeconds} = useContext(GameDataContext);
        const [clicked, setClicked] = useState<number>(0);
        const [points, setPoints] = useState<number>(0);
        const [currentNumber, setCurrentNumber] = useState<number>(0);
        const [board, setBoard] = useState<number[]>([]);
        console.log(currentNumber)
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
            console.log("Clicked in overlay!")
        }

        const removeFindOption = (e: { keyCode: number; ctrlKey: any; preventDefault: () => void; }) => {
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
        window.addEventListener("keydown", removeFindOption)
        return (() => {
            window.removeEventListener("keydown", removeFindOption);
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
                                     result={result}
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
