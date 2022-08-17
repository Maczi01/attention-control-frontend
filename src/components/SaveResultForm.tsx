import React, {useContext, useState} from "react";
import {Button, Flex, FormControl, FormLabel, Input, Box} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {GiConfirmed, GiTrophyCup} from "react-icons/gi";
import {ModalHeader} from "@chakra-ui/modal";
import {BiSend} from "react-icons/bi"
import {GameDataContext} from "../context/GameDataContext";

interface SaveResultFormProps {
    points: number;
    saveUserInDatabase: (name: string, points: number) => void;
}

const SaveResultForm: React.FC<SaveResultFormProps> = ({points, saveUserInDatabase}) => {
    const [name, setName] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    // @ts-ignore
    const {addItem} = useContext(GameDataContext);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        addItem({name, points});
        saveUserInDatabase(name, points);
        setName('');
        setSubmitted(true);
    };
    return (
        <Box>
            <FormControl id="name">
                <Input type="text"
                       value={name}
                       focusBorderColor="lime"
                       onChange={(event) => setName(event.target.value)}
                       placeholder="Add your name..."
                       disabled={submitted}
                />
                <Flex
                    align="center"
                    justify="space-around"
                >
                    {submitted ?
                        <Button
                            m="10px"
                            w="150px"
                            leftIcon={<GiConfirmed/>}
                            colorScheme="green"
                            variant="solid"
                        >
                            Submited
                        </Button>
                        :
                        <Button
                            m="10px"
                            w="150px"
                            colorScheme="messenger"
                            variant="solid"
                            leftIcon={<BiSend/>}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    }
                    <Link to="/results">
                        <Button
                            m="10px"
                            w="150px"
                            leftIcon={<GiTrophyCup/>}
                            colorScheme="yellow"
                        >
                            Results
                        </Button>
                    </Link>
                </Flex>
            </FormControl>
        </Box>
    )
}

export default SaveResultForm;
