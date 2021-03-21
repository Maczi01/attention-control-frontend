import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const MainView = () => {


    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
           <Link to="/game"> Rozpocznij grę!</Link>
        </Flex>
    )
}

