import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Flex} from "@chakra-ui/react"

const Number = ({number, makeRequest}) => {

    const [active, setActive] = useState(false);
    return (

        active ?
            <Button
                size="md"
                colorScheme="pink"
                height="48px"
                width="48px"
                border="2px"
                borderColor="yellow.500"
                onClick={() => setActive(makeRequest(number))}
            >
                {number}
            </Button>
            :
            <Button
                size="md"
                colorScheme="blue"
                height="48px"
                width="48px"
                border="2px"
                borderColor="yellow.500"
                onClick={() => setActive(!makeRequest(number))}
            >
                {number}
            </Button>


    )
};

export default Number;