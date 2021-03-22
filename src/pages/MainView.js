import {Button, Flex, FormControl, FormLabel, Input, Center} from "@chakra-ui/react"
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const MainView = () => {


    return (
        <Center>
            <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803"
                  mx="auto">
                <Link to="/game">
                    <Button colorScheme="teal" size="lg">
                        Start the game!
                    </Button>
                </Link>
            </Flex>
        </Center>
    )
}

