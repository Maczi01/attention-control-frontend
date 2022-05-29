import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Button, Center, Flex, Collapse} from "@chakra-ui/react"
import SaveResultForm from "./SaveResultForm";
import {GameDataContext} from "../context/GameDataContext";
import {BsArrowCounterclockwise} from "react-icons/bs"
import {BiSave} from "react-icons/bi"
import {Link} from "react-router-dom";
import CountUp from 'react-countup';

interface ResultModalProps {
    isOpen: boolean;
    handleStart: () => void;
    clicked: number,
    board: number[];
    points: number
}

const ResultModal: React.FC<ResultModalProps> = ({
                                                     isOpen,
                                                     handleStart,
                                                     clicked,
                                                     points,
                                                 }) => {

    const [showMailInput, setShowMailInput] = useState<boolean>(false);
    const saveUserInDatabase = (email: string) => {
        console.log(email)
    };
    const accuracy = points / clicked * 100

    return (
        <Modal isOpen={isOpen} onClose={() => {console.log("g")
        }}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Time's up!
                </ModalHeader>
                <Center>
                    <Box p='10px' m='10px'>
                        <p> Your result is:<CountUp delay={0.5} end={points} duration={1.5}/></p>
                        <p>Accuracy:<CountUp delay={0.5} end={accuracy} duration={1.5}/> %</p>
                    </Box>
                </Center>
                <ModalBody>
                    <Flex
                        align="center"
                        justify="space-around"
                        direction="column"
                    >
                        <Flex
                            align="normal" justify="space-around" width="80%"
                        >
                            <Link to="/">
                                <Button
                                    w="150px"
                                    m="3px"
                                    colorScheme="red"
                                    leftIcon={<BsArrowCounterclockwise/>}
                                    onClick={handleStart}>
                                    Play again
                                </Button>
                            </Link>
                            <Button
                                w="150px"
                                m="3px"
                                variant="solid"
                                colorScheme="blue"
                                leftIcon={<BiSave/>}
                                onClick={() => setShowMailInput(prev => !prev)}
                            >
                                Save result
                            </Button>
                        </Flex>
                        <Collapse in={showMailInput} animateOpacity>
                            <Flex m="15px">
                                <SaveResultForm points={points} accuracy={accuracy}
                                                saveUserInDatabase={saveUserInDatabase}/>
                            </Flex>
                        </Collapse>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal;
