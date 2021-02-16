import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Flex} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"

function App() {

    const [table, setTable] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,])


    return (
        <ChakraProvider>
            {console.log(table)}
            <Flex direction="column" align="center" justify="space-between" width="80%" height="full"
                  backgroundColor="#ffd803" mx="auto" py="1%">
                <Grid templateColumns="repeat(9, 1fr)" gap="5%" w="800px" h="100%"
                >
                    {table.map((e,index) =>
                        <Button
                            key={index}
                            size="md"
                            height="48px"
                            width="48px"
                            border="2px"
                            borderColor="green.500"
                        >
                            {e}
                        </Button>

                    )}

                </Grid>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
