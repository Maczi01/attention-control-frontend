import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import React, {useContext, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import {Link} from "react-router-dom";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";
import SaveResultForm from "../components/SaveResultForm";

export const SaveResult = () => {

    const {result, saveUserInDatabase} = useContext(GameDataContext);

    // const [name, setName] = useState('')

    // const handleName = (e) => {
    //     e.preventDefault();
    //     saveUserInDatabase(name, result)
    //     console.log(name, result)
    // }

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
          <SaveResultForm result={result} saveUserInDatabase={saveUserInDatabase}/>
        </Flex>
    )
}

