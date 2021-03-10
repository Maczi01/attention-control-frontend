import React from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";

const ResultWindow = ({isOpen, result}) => (

    <Modal isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Attention control</ModalHeader>
            <Box p='10px' m='10px'>
                Twoj wynik to {result}
            </Box>
            <ModalBody>
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default ResultWindow;