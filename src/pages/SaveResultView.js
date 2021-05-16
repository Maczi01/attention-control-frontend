import {Flex} from "@chakra-ui/react"
import React, {useContext} from "react";
import {GameDataContext} from "../context/GameDataContext";
import SaveResultModal from "../components/SaveResultForm";

export const SaveResultView = () => {

    const {result, saveUserInDatabase} = useContext(GameDataContext);

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
          <SaveResultModal result={result} saveUserInDatabase={saveUserInDatabase}/>
        </Flex>
    )
}

