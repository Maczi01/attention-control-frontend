import React from "react";
import {Container, Center,Box} from "@chakra-ui/react"

const BlindNubmer = ({number}) => (
    <Box
        size="md"
        colorScheme="blue"
        height="48px"
        width="48px"
        border="2px"
        backgroundColor="#0BC5EA"
        borderColor="yellow.500"
        borderRadius="15%"
        padding="0.6rem"
    >
        <Center>
            {number}
        </Center>
    </Box>
)


export default BlindNubmer;