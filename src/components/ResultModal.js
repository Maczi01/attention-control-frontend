import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"
import SaveResultForm from "./SaveResultForm";
import {GameDataContext} from "../context/GameDataContext";

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
                    Game over!
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
                            // direction="row"
                            align="normal"
                            justify="space-around"
                        >
                            <Link to="/">
                                <Button colorScheme="teal" size="lg" onClick={handleStart}>
                                    Play again
                                </Button>
                            </Link>
                            <Button colorScheme="cyan" size="lg" onClick={() => setShowMailInput(prev => !prev)}>
                                Save result
                            </Button>

                        </Flex>

                        <Flex m="px">
                            {showMailInput && <SaveResultForm result={result} saveUserInDatabase={saveUserInDatabase}/>}
                            <Link to="/save">
                            </Link>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal;