import {GameDataContext} from "../context/GameDataContext";
import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router";
import {Button, Center, Flex, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react"

export const ResultView: React.FC = () => {
    // @ts-ignore
    const {resultsList, getResultsList, deleteResultFromList} = useContext(GameDataContext);
    useEffect(() => {
        getResultsList()
    }, []);
    const history = useHistory();
    return (
        <Flex
            direction="column"
            align="center"
            justify="space-around"
            width="85%"
            backgroundColor="#ffd803"
            mx="auto"
        >
            <Center><h2>Results</h2></Center>
            <Center>
                <Flex justify="space-between">
                    <Button size="xs">Best results</Button>
                    <Button size="xs">Best accuracy</Button>
                    <Button size="xs">Last results</Button>
                    <Button size="xs">Worst results</Button>
                </Flex>
            </Center>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Number</Th>
                        <Th>Name</Th>
                        <Th>Score</Th>
                        <Th>Date</Th>
                        <Th>Accuracy</Th>
                        <Th>Info</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {resultsList && resultsList.map((result: { playerName: string;
                        score: number;
                        date: string;
                        accuracy: number;
                        id: string; }, index: number) => (
                        <Tr key={index + 1}>
                            <Td>{index + 1}</Td>
                            <Td>{result.playerName}</Td>
                            <Td>{result.score}</Td>
                            <Td>{result.date}</Td>
                            <Td>{result.accuracy}</Td>
                            <Td>
                                <Button onClick={() => history.push(`/playersresult/${result.id}`)}> Details
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
