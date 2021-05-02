import React, {useState} from "react";
import {Button, FormControl, FormLabel, Input} from "@chakra-ui/react"
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
            <FormLabel>Your name</FormLabel>
            <Input type="text"
                   value={name}
                   onChange={(event) => setName(event.target.value)}
            />
            <Button
                onClick={handleSubmit}
                mt={4}
                colorScheme="teal"
            >
                Submit
            </Button>

            <Link to="/results">Wyniki
            </Link>
        </FormControl>
    )

}

export default SaveResultForm;
