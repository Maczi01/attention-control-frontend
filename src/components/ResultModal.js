import React, {useContext, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {Link} from "react-router-dom";
import {Button, Center, Flex} from "@chakra-ui/react"
import SaveResultForm from "./SaveResultForm";
import {GameDataContext} from "../context/GameDataContext";
import { MdBuild , MdCall } from "react-icons/md"

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
                                <Button m="3px" colorScheme="teal" onClick={handleStart}>
                                    Play again
                                </Button>
                            </Link>
                            <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
                                Settings
                            </Button>

                        </Flex>

                        <Flex m="15px">
                            {showMailInput && <SaveResultForm result={result} saveUserInDatabase={saveUserInDatabase}/>}
                            {/*<Link to="/save">*/}
                            {/*</Link>*/}
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal;