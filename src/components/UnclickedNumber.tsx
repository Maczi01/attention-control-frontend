import React from "react";
import {Container, Center,Box} from "@chakra-ui/react"

interface UnclickedNumberProps {
    number: number
}

const UnclickedNubmer: React.FC<UnclickedNumberProps> = ({number}) => (
    <Box
        height="48px"
        width="48px"
        border="2px"
        backgroundColor="gray"
        borderColor="yellow.500"
        borderRadius="15%"
        padding="0.6rem"
    >
        <Center>
            {number}
        </Center>
    </Box>
)


export default UnclickedNubmer;
