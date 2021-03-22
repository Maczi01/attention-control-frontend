import React from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"

const ResultWindow = ({isOpen, result}) => (

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
                    <Link to="/game">
                        <Button colorScheme="teal" size="lg">
                            Play again
                        </Button>
                    </Link>
                    <Link to="/game">
                        <Button colorScheme="teal" size="lg">
                            Play again
                        </Button>
                    </Link>
                </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default ResultWindow;