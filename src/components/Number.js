import React, {useState} from "react";
import {Button} from "@chakra-ui/react"

const Number = ({number, makeRequest}) => {

    const [active, setActive] = useState(false);

    return (
        <Button
            disabled={active}
            size="md"
            colorScheme="blue"
            height="48px"
            width="48px"
            border="2px"
            borderColor="yellow.500"
            onClick={async () => setActive(await makeRequest(number))}
        >
            {number}
        </Button>
    )
};

export default Number;