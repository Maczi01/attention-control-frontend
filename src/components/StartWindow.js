import React from 'react';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";

const StartWindow = ({isOpen, onClose, handleStart}) => (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay
            style={{backdropFilter: 'blur(4px)'}}
        />
        <ModalContent>
            <ModalHeader>Attention control</ModalHeader>
            <Box p='10px' m='10px'>
                Your goal is to click numbers from zero to 99. You have 90 seconds for that. Ready? </Box>
            <ModalCloseButton/>
            <ModalBody>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={() => {
                    onClose();
                    handleStart()
                }}>
                    Lets start!
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)

export default StartWindow;