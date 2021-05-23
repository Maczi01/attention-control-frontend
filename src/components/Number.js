import React, {useState} from "react";
import {Button} from "@chakra-ui/react"

const Number = ({number, checkGivenNumber}) => {

    const [active, setActive] = useState(false);
    return (
        <Button
            disabled={active}
            size="md"
            colorScheme="purple"
            height="48px"
            width="48px"
            border="2px"
            borderColor="yellow.500"
            _hover={{
                bg: "red",
                transform: "scale(1.1)",
            }}
            _focus={{
                boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={async () => setActive(await checkGivenNumber(number))}
        >
            {number}
        </Button>
    )
};

export default Number;