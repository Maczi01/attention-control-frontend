import React, {useContext, useState} from "react";
import {Button, Flex, FormControl, FormLabel, Input, Box, Text} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {GiConfirmed, GiTrophyCup} from "react-icons/gi";
import {ModalHeader} from "@chakra-ui/modal";
import {BiSend} from "react-icons/bi"
import {GameDataContext} from "../context/GameDataContext";

interface SaveResultFormProps {
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => void
}

const SaveResultForm: React.FC<SaveResultFormProps> = ({handleSubmit}) => {
    const [name, setName] = useState<string>('');

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleSubmit(event, name)
    }

    return (
        <Box>
            <FormControl id="name">
                <Input type="text"
                       value={name}
                       focusBorderColor="lime"
                       onChange={(event) => setName(event.target.value)}
                       placeholder="Add your name..."
                       w="100%"
                />
                <Flex
                    align="center"
                    justify="space-around"
                >
                    <Button
                        m="10px"
                        colorScheme="messenger"
                        variant="solid"
                        leftIcon={<BiSend/>}
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    )
}

export default SaveResultForm;
