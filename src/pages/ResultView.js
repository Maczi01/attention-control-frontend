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
    const {name} = useContext(GameDataContext);
    // const {board, endOfGameTime} = gameData;

    const getAll = () => {
        let values = [];
        const keys = Object.keys(localStorage);
        for (let i = 0; i < keys.length; i++) {
            values.push(`${localStorage.getItem(keys[i])} : ${keys[i]}`)
        }
        return values;
    }
    const items = getAll()


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
                        <Th isNumeric>Number</Th>
                        <Th>Name</Th>
                        <Th isNumeric>Score</Th>
                        <Th isNumeric>Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Flex>
    )
}