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

const ResultWindow = () => (

    <Modal>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Attention control</ModalHeader>
            <Box p='10px' m='10px'>
                Twoim zadaniem jest klikanie liczb od zera do 99. Masz na to 90 sekund. Gotowy?
            </Box>
            <ModalCloseButton/>
            <ModalBody>
            </ModalBody>

            <ModalFooter>
                {/*<Button colorScheme="blue" mr={3} onClick={() => {onClose(); handleStart()}}>*/}
                    Startujemy!
                {/*</Button>*/}
            </ModalFooter>
        </ModalContent>
    </Modal>
)

export default ResultWindow;