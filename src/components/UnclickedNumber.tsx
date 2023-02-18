import { Box } from '@chakra-ui/layout';
import { Center } from "@chakra-ui/react"
import { FC } from "react";

interface UnclickedNumberProps {
    number: number
}

const UnclickedNubmer: FC<UnclickedNumberProps> = ({number}) => (
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
