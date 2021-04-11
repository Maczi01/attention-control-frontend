import {GameDataContext} from "../context/GameDataContext";
import React, {useContext, useEffect} from 'react';
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
    const {resultsBoard, getResultsBoard, deleteResultFromBoard} = useContext(GameDataContext);
    // const {board, endOfGameTime} = gameData;
    useEffect(() => {
        getResultsBoard()
    }, [])


    return (
        <Flex
            direction="column"
            align="center"
            justify="space-around"
            width="80%"
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
                    {resultsBoard ? resultsBoard.map((result, index) => (
                            <Tr key={index + 1}>
                                <Td>{index + 1}</Td>
                                <Td>{result.playerName}</Td>
                                <Td>{result.score}</Td>
                                <Td>{result.date}</Td>
                                <Td><Button onClick={() => deleteResultFromBoard(index)}>
                                    Remove
                                </Button></Td>
                            </Tr>
                        )) :
                        null
                    }
                </Tbody>
            </Table>
        </Flex>
    )
}