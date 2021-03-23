import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import React, {useState, useContext} from "react";
import {GameDataContext} from "../context/GameDataContext";
import {Link} from "react-router-dom";

export const SaveResult = () => {

    const {name, setName, result} = useContext(GameDataContext);
    const handleName = (e) => {
        e.preventDefault();
        setName(name)
        localStorage.setItem(name, result)
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
                <Link to="/results">Wyniki
                </Link>
            </FormControl>
        </Flex>
    )
}

