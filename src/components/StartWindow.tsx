import { Box } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Button, ModalFooter } from '@chakra-ui/react';
import { FC } from 'react';

interface StartWindowProps {
    isOpen: boolean;
    onClose: () => void;
    handleStart: () => void;
}

const StartWindow: FC<StartWindowProps> = ({isOpen, onClose, handleStart}) => (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay
            style={{backdropFilter: 'blur(4px)'}}
        />
        <ModalContent>
            <ModalHeader>Attention control</ModalHeader>
            <Box p='10px' m='10px'>
                Your goal is to click numbers from zero to 99. You have 90 seconds for that. Ready? </Box>
            <ModalBody>
            </ModalBody>

            <ModalFooter>
                <Button background="primary" mr={3} onClick={() => {
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
