import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Flex} from "@chakra-ui/react"

const Number = ({number}) => {

    const [active, setActive] = useState(true);
    return (

        active ? <Button
                size="md"
                height="48px"
                width="48px"
                border="2px"
                colorScheme="red"
                borderColor="green.500"
                onClick={() => setActive(false)}
            >
                {number}
            </Button> :
            <Button
                size="md"
                colorScheme="teal"
                height="48px"
                width="48px"
                border="2px"
                borderColor="yellow.500"
            >
                {number}
            </Button>
    )
};

export default Number;