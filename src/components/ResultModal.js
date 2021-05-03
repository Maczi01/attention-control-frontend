import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"
import SaveResultForm from "./SaveResultForm";
import {GameDataContext} from "../context/GameDataContext";
// import {GiConfirmed} from "react-icons/gi"

const ResultModal = ({isOpen, result, handleStart}) => {

    const [showMailInput, setShowMailInput] = useState(false);
    const {saveUserInDatabase} = useContext(GameDataContext);
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
                        Your result is: {result}
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
                                    colorScheme="teal"
                                    onClick={handleStart}>
                                    Play again
                                </Button>
                            </Link>
                            <Button
                                w="150px"
                                m="3px"
                                colorScheme="teal"
                                variant="solid"
                                onClick={() => setShowMailInput(prev => !prev)}
                            >
                                Save result
                            </Button>
                        </Flex>
                        <Flex m="15px">
                            {showMailInput && <SaveResultForm result={result} saveUserInDatabase={saveUserInDatabase}/>}
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal;