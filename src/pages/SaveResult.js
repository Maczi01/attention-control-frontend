import {Flex} from "@chakra-ui/react"
import React, {useContext} from "react";
import {GameDataContext} from "../context/GameDataContext";
import SaveResultForm from "../components/SaveResultForm";

export const SaveResult = () => {

    const {result, saveUserInDatabase} = useContext(GameDataContext);

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
          <SaveResultForm result={result} saveUserInDatabase={saveUserInDatabase}/>
        </Flex>
    )
}

