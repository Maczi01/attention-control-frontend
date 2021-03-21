import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import React, {useState} from "react";

export const MainView = () => {

    const [name, setName] = useState('');

    const handleName = (e) => {
        e.preventDefault();
        console.log(name)
        setName('')
    }
    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
            <FormControl onSubmit={handleName} id="name">
                <FormLabel>Email address</FormLabel>
                <Input type="text"
                       value={name}
                       onChange={(event) => setName(event.target.value)}

                />
                <Button
                    onClick={handleName}
                    mt={4}
                    colorScheme="teal"
                    // isLoading={props.isSubmitting}
                    // type="submit"
                >
                    Submit
                </Button>
            </FormControl>
        </Flex>
    )
}

