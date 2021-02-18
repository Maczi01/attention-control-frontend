import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./components/Number";

function App() {
    const [table, setTable] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/api");
            res.json()
                .then(res => setTable(res))
        }
        fetchData();
    },[setTable])

    const makeRequest =  () => {
       console.log("**")
        const body = "nic";
        const url = "http://localhost:8080/api";
        const jsonBody = body ? JSON.stringify(body) : undefined;
        const headers= {
            "Content-Type": "application/json",
        }
        const response = fetch(url,
            {
                method: "post",
                headers,
                body: jsonBody
            }
        );
        // if (!response.ok) {
        //     throw new Error("Coś nie tak z api!")
        // }
    };

    return (
        <ChakraProvider>
            {console.log(table)}
            <Flex direction="column" align="center" justify="space-between" width="80%" height="full"
                  backgroundColor="#ffd803" mx="auto" py="1%">
                <Grid templateColumns="repeat(9, 1fr)" gap="5%" w="800px" h="80%"
                >
                    {table.map((e, index) =>
                        <Number
                            makeRequest={makeRequest}
                            number={e}
                            key={index}/>
                    )}

                </Grid>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
