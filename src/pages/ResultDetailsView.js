import {Button, Flex, FormControl, FormLabel, Grid, Input} from "@chakra-ui/react"
import React, {useContext, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import {Link} from "react-router-dom";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";
import SaveResultForm from "../components/SaveResultForm";
import Number from "../components/Number";

export const ResultDetailsView = () => {


    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
            <h1>Gracz </h1>
            <h2>wynik </h2>
            <h2>Data gry </h2>
            <h2>Tabela gry</h2>
            <Grid templateColumns="repeat(10, 1fr)" gap="5%" w="600px" m="5px">
                {board && board.map((number, indexNummber) =>
                    <Number
                        checkGivenNumber={checkGivenNumber}
                        number={number}
                        key={indexNummber}/>
                )}
            </Grid>
        </Flex>
    )
}