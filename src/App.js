import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./components/Number";
import CurrentTimebox from "./components/CurrentTimebox";
import {useDisclosure} from "@chakra-ui/react"


function App() {

    const [table, setTable] = useState([])
    const [gameData, setGameData] = useState([]);
    const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})
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
                .then(res => setGameData(res));
        }

        fetchData();
    }, [setGameData])

    const makeRequest = async (number) => {
        const url = "http://localhost:8080/api";
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(url,
            {
                method: "post",
                headers,
                body: number
            }
        );
        const newVar = await response.json();
        console.log(newVar);
        return newVar;
    };

    const getResults = async () => {
        const url = "http://localhost:8080/api/results";
        const headers = {
            "Content-Type": "application/json",
        }
        const response = await fetch(url,
            {
                headers,
            }
        );
        const newVar = await response.json();
        console.log(`The results is: ${newVar.points}`);
        return newVar;
    };
    return (
        <ChakraProvider>
            {/*<Modal isOpen={isOpen} onClose={onClose}>*/}
            {/*    <ModalOverlay/>*/}
            {/*    <ModalContent>*/}
            {/*        <ModalHeader>Attention control</ModalHeader>*/}
            {/*        <Box p='10px' m='10px'>*/}
            {/*            Twoim zadaniem jest klikanie liczb od zera do 99. Masz na to 90 sekund. Gotowy?*/}
            {/*        </Box>*/}
            {/*        <ModalCloseButton/>*/}
            {/*        <ModalBody>*/}
            {/*        </ModalBody>*/}

            {/*        <ModalFooter>*/}
            {/*            <Button colorScheme="blue" mr={3} onClick={onClose}>*/}
            {/*                Startujemy!*/}
            {/*            </Button>*/}
            {/*        </ModalFooter>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
            <Flex direction="column" align="center" justify="space-between" width="80%" height="full"
                  backgroundColor="#ffd803" mx="auto" py="1%">
                <CurrentTimebox
                    totalTimeInMinutes={gameData.endOfGameTime}
                    getResults={getResults}
                    isOpen={isOpen}
                    onClose={onClose}
                />
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
