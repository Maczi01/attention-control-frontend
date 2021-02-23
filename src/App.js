import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, ArrowForwardIcon} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./components/Number";
import CurrentTimebox from "./components/CurrentTimebox";

function App() {
    const [table, setTable] = useState([])
    const [data, setData] = useState([]);

    const [counter, setCounter] = useState(5);
    // React.useEffect(() => {
    //     const timer =
    //         counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //     return () => clearInterval(timer);
    // }, [counter]);
    // const countDown = () => {
    //          setInterval(() => setCounter(counter - 1), 1000);
    //     // if(counter<=0){
    //         console.log(counter)
    //     // }
    //     // return () => clearInterval(timer);
    // };
    // console.log(counter)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/api");
            res.json()
                .then(res => setTable(res))
        }

        fetchData();
    }, [setTable]);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/api/time");
            res.json()
                .then(res => console.log(res));
        }

        fetchData();
    }, [setData])

    const makeRequest = async (number) => {
        // const body = number;
        const url = "http://localhost:8080/api";
        const headers = {
            "Content-Type": "application/json",
        }
        // const response = fetch(url,
        const response = await fetch(url,
            {
                method: "post",
                headers,
                body: number
            }
        );
        const newVar = await response.json();
        console.log(newVar);
        // ).then(response => console.log(response.json()));
        // console.log(response)
        return newVar;
    };

    return (
        <ChakraProvider>
            <Flex direction="column" align="center" justify="space-between" width="80%" height="full"
                  backgroundColor="#ffd803" mx="auto" py="1%">
                <CurrentTimebox totalTimeInMinutes={1}/>
                {/*<Button onClick={countDown} colorScheme="blue">Start the game</Button>*/}
                <Grid templateColumns="repeat(10, 1fr)" gap="5%" w="800px" h="80%" m="20px"
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
