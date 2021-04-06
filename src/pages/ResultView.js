import {GameDataContext} from "../context/GameDataContext";
import React, {useContext} from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Flex, Center,
} from "@chakra-ui/react";

export const ResultView = () => {
    const {resultsBoard} = useContext(GameDataContext);
    // const {board, endOfGameTime} = gameData;


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
                    resultsBoard.map((result) =>(
                    <Tr>
                        <Td>{result.key}</Td>
                        <Td>{result.playerName}</Td>
                        <Td>{result.score}</Td>
                        <Td>{result.date}</Td>
                    </Tr>
                    ))
                </Tbody>
            </Table>
        </Flex>
    )
}