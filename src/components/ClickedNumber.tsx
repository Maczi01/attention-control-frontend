import { Box } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import * as React from "react";

type Props = {
    number: number;
}

const ClickedNumber: React.FC<Props> = ({number}) => (
    <Box
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


export default ClickedNumber;

