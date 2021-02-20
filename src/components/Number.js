import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Flex} from "@chakra-ui/react"

const Number = ({number, makeRequest}) => {

    const [active, setActive] = useState(false);

    return (

        active ?
            <Button
                // disabled={active}
                size="md"
                colorScheme="pink"
                height="48px"
                width="48px"
                border="2px"
                borderColor="yellow.500"
                onClick={async () => setActive(await makeRequest(number))}
                // onClick={() => setActive(!!makeRequest(number))}
            >
                {number}
            </Button>
            :
            <Button
                disabled={active}
                size="md"
                height="48px"colorScheme="blue"
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