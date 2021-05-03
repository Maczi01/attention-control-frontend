import React, {useState} from "react";
import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import {Link} from "react-router-dom";

const SaveResultForm = ({result, saveUserInDatabase}) => {

    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        saveUserInDatabase(name, result)
        setName('')
    }
    return (
        <FormControl id="name">
            {/*<FormLabel>Your name</FormLabel>*/}
            <Input type="text"
                   value={name}
                   onChange={(event) => setName(event.target.value)}
                   placeholder="Add your name..."
            />

            <Flex
                // direction="row"
                align="normal"
                justify="space-around"
            >
                <Link to="/">
                    <Button
                        onClick={handleSubmit}
                        mt={4}
                        colorScheme="teal"
                    >
                        Submit
                    </Button>
                </Link>
                <Link to="/results">
                    <Button
                        onClick={handleSubmit}
                        mt={4}
                        colorScheme="teal"
                    >
                        Results
                    </Button>
                </Link>

            </Flex>


        </FormControl>
    )

}

export default SaveResultForm;
