import {Button, Center, Flex} from "@chakra-ui/react"
import React from "react";
import {Link} from "react-router-dom";

export const MainView = () => (
    <Center h="100%">
        <Flex direction="column" align="center" justify="space-around" width="80%" height="100%"
              backgroundColor="background"
              py="20%" my="auto"
              mx="auto">
            <Link to="/game">
                <Button
                    _hover={{
                        bg: "tertiary_hover",
                        transform: "scale(1.1)",
                    }}
                    backgroundColor="primary" size="lg">
                    Start the game
                </Button>
            </Link>
        </Flex>
    </Center>
);