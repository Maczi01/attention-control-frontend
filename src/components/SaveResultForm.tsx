import React, {useContext, useState} from "react";
import {Button, Flex, FormControl, FormLabel, Input, Box, Text} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {GiConfirmed, GiTrophyCup} from "react-icons/gi";
import {ModalHeader} from "@chakra-ui/modal";
import {BiSend} from "react-icons/bi"
import {GameDataContext} from "../context/GameDataContext";

interface SaveResultFormProps {
    points: number;
    saveUserInDatabase: (name: string, points: number) => void;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    // submitted: boolean
}

const SaveResultForm: React.FC<SaveResultFormProps> = ({points, saveUserInDatabase, handleSubmit}) => {
    const [name, setName] = useState<string>('');
    // const [submitted, setSubmitted] = useState<boolean>(false);
    // @ts-ignore
    // const {addItem} = useContext(GameDataContext);

    // const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     addItem({name, points});
    //     saveUserInDatabase(name, points);
    //     setName('');
    //     setSubmitted(true);
    // };
    return (
        <Box>
            <FormControl id="name">
                <Input type="text"
                       value={name}
                       focusBorderColor="lime"
                       onChange={(event) => setName(event.target.value)}
                       placeholder="Add your name..."
                />
                <Flex
                    align="center"
                    justify="space-around"
                >
                    <Button
                        m="10px"
                        // w="150px"
                        colorScheme="messenger"
                        variant="solid"
                        leftIcon={<BiSend/>}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
            {/*)*/}
            {/*}*/}
        </Box>
    )
}

export default SaveResultForm;
