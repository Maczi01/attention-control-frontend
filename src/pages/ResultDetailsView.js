import {Button, Flex, FormControl, FormLabel, Grid, Input} from "@chakra-ui/react"
import React, {useContext, useEffect, useState} from "react";
import {GameDataContext} from "../context/GameDataContext";
import {Link} from "react-router-dom";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";
import SaveResultForm from "../components/SaveResultForm";
import Number from "../components/Number";

export const ResultDetailsView = ({match}) => {
    const selectedId = match.params.id
    console.log(selectedId)
    const {getPlayersResult, choosenResult} = useContext(GameDataContext);
    useEffect(() => {
        getPlayersResult(selectedId)
    }, [selectedId]);

    console.log(getPlayersResult(selectedId))

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
            <h1>{choosenResult.playerName} </h1>
            <h2>wynik: {choosenResult.score}</h2>
            <h2>Data gry {choosenResult.data}</h2>
            <h2>Tabela gry</h2>
            <Grid templateColumns="repeat(10, 1fr)" gap="5%" w="600px" m="5px">
                {choosenResult.gameboard && choosenResult.gameboard.map((number, indexNummber) =>
                    <Number
                        number={number}
                        key={indexNummber}/>
                )}
            </Grid>
        </Flex>
    )
}