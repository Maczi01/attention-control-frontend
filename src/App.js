import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, ArrowForwardIcon} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./components/Number";

function App() {
    const [table, setTable] = useState([])
    const [data, setData] = useState([]);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    }

    const startCountingDown = () => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            // setYear(new Date().getFullYear());
        }, 1000);
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTimeLeft(calculateTimeLeft());
    //         // setYear(new Date().getFullYear());
    //     }, 1000);
    //     // Clear timeout if the component is unmounted
    //     return () => clearTimeout(timer);
    // });
    console.log(timeLeft)
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
                <Button onClick={startCountingDown} colorScheme="blue">Start the game</Button>
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
