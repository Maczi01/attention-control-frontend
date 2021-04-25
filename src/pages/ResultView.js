import {GameDataContext} from "../context/GameDataContext";
import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router";
import {Button, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Center,
} from "@chakra-ui/react";

export const ResultView = () => {
    const {resultsList, setResultsList, getResultsList, deleteResultFromList} = useContext(GameDataContext);
    useEffect(() => {
        getResultsList()
    }, []);
    const history = useHistory();
    console.log(resultsList)
    return (
        <Flex
            direction="column"
            align="center"
            justify="space-around"
            width="85%"
            backgroundColor="#ffd803"
            mx="auto"
        >
            <Center>Results</Center>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Number</Th>
                        <Th>Name</Th>
                        <Th>Score</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {resultsList && resultsList.map((result, index) => (
                        <Tr key={index + 1}>
                            <Td>{index + 1}</Td>
                            <Td>{result.playerName}</Td>
                            <Td>{result.score}</Td>
                            <Td>{result.date}</Td>
                            <Td>{result.date}</Td>
                            {console.log(`${result.playerName}: ${result.id}`)}
                            <Td> <Button onClick={() => history.push(`/playersresult/${result.id}`)}>
                            </Button>
                            </Td>
                            <Td><Button onClick={() => deleteResultFromList(result.id)}>
                                Remove
                            </Button></Td>
                        </Tr>
                    ))
                    }
                </Tbody>
            </Table>
        </Flex>
    )
}
