import React from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"

const ResultWindow = ({isOpen, result, handleStart}) => (

    <Modal isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Attention control</ModalHeader>
            <Box p='10px' m='10px'>
                Twoj wynik to {result}
            </Box>
            <ModalBody>
                <Flex
                    align="center"
                    justify="space-around"
                >
                    <Link to="/">
                        <Button colorScheme="teal" size="lg" onClick={handleStart}>
                            Play again
                        </Button>
                    </Link>
                    <Link to="/save">
                        <Button colorScheme="cyan" size="lg">
                            Save result
                        </Button>
                    </Link>
                </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default ResultWindow;