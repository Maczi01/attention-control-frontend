import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import React, {useContext} from "react";
import {GameDataContext} from "../context/GameDataContext";
import {Link} from "react-router-dom";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";

export const SaveResult = () => {

    const {name, setName, result} = useContext(GameDataContext);
    const handleName = (e) => {
        e.preventDefault();
        setName(name)
        localStorage.setItem(name, result)
    }

    const saveUserInDatabase = async () => {
        return await FetchData.getData(url.localToSaveResultEndpoint, 'POST', name)
            .catch(err => console.error(err.message));
    };

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
            <FormControl onSubmit={handleName} id="name">
                <FormLabel>Email address</FormLabel>
                <Input type="text"
                       value={name}
                       onChange={(event) => setName(event.target.value)}

                />
                <Button
                    onClick={saveUserInDatabase}
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

