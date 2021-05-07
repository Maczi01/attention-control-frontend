import React, {useState} from "react";
import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {GiConfirmed} from "react-icons/gi";

const SaveResultForm = ({result, saveUserInDatabase,clicked}) => {

    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        saveUserInDatabase(name, result, clicked)
        setName('')
        setSubmitted(true);
    }
    return (
        <FormControl id="name">
            {/*<FormLabel>Your name</FormLabel>*/}
            <Input type="text"
                   value={name}
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
                        // onClick={handleSubmit}
                    >
                        Submited
                    </Button>
                    :
                    <Button
                        m="10px"
                        w="150px"
                        colorScheme="messenger"
                        variant="solid"
                        onClick={handleSubmit}

                    >
                        Submit
                    </Button>
                }
                <Link to="/results">
                    <Button
                        m="10px"
                        w="150px"
                        colorScheme="yellow"
                        >
                    {/*><Link*/}
                    {/*    // to="/results">*/}
                        Results
                    {/*</Link>*/}
                    </Button>
                </Link>

            </Flex>


        </FormControl>
    )

}

export default SaveResultForm;
