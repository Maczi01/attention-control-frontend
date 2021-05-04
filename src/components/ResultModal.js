import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"
import SaveResultForm from "./SaveResultForm";
import {GameDataContext} from "../context/GameDataContext";
import {BsArrowCounterclockwise} from "react-icons/bs"
import CountUp from 'react-countup';

const ResultModal = ({isOpen, result, handleStart}) => {

    const [showMailInput, setShowMailInput] = useState(false);
    const {saveUserInDatabase, clicked} = useContext(GameDataContext);


    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader
                    align="center"
                    justify="space-around">
                    Time's up!
                </ModalHeader>
                <Center>
                    <Box p='10px' m='10px'>
                        Your result is: <CountUp
                        end={result}
                        duration={5}
                    />
                        Accuracy: {result / clicked}
                    </Box>
                </Center>
                <ModalBody>
                    <Flex
                        align="center"
                        justify="space-around"
                        direction="column"
                    >
                        <Flex
                            align="normal"
                            justify="space-around"
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
                                onClick={() => setShowMailInput(prev => !prev)}
                            >
                                Save result
                            </Button>
                        </Flex>
                        <Flex m="15px">
                            {showMailInput &&
                            <SaveResultForm result={result} clicked={clicked} saveUserInDatabase={saveUserInDatabase}/>}
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal;