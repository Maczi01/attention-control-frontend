import {Flex, Grid} from "@chakra-ui/react"
import React, {useContext, useEffect} from "react";
import {GameDataContext} from "../context/GameDataContext";
import UnclickedNubmer from "../components/UnclickedNumber";
import ClickedNubmer from "../components/ClickedNumber";

interface ResultDetailsViewProps {
    match: {
        path: string;
        url: string;
        isExact: boolean;
        params: {
            id: string;
        };
    }
}


export const ResultDetailsView: React.FC<ResultDetailsViewProps> = ({match}) => {
    const selectedId = match.params.id
    console.log(selectedId)
    // @ts-ignore
    const {getPlayersResult, playersResult} = useContext(GameDataContext);
    useEffect(() => {
        getPlayersResult(selectedId)
    }, [selectedId]);

    console.log(`gameboard`);
    console.log(playersResult.gameboard);

    return (
        <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803" mx="auto">
            <h1>{playersResult.playerName} </h1>
            <h2>wynik: {playersResult.score}</h2>
            <h2>Data gry {playersResult.date}</h2>
            <h2>Celność {playersResult.accuracy}</h2>
            <h2>Game board</h2>
            {/*<Grid templateColumns="repeat(10, 1fr)" gap="1%" w="600px" m="5px">*/}
            {/*    {playersResult.gameboard && playersResult.gameboard.map((number: number, indexNumber: React.Key | null | undefined) =>*/}
            {/*        number > playersResult.score ?*/}
            {/*            <ClickedNubmer*/}
            {/*                number={number}*/}
            {/*                key={indexNumber}/> :*/}
            {/*            <UnclickedNubmer*/}
            {/*                number={number}*/}
            {/*                key={indexNumber}/>*/}
            {/*    )}*/}
            {/*</Grid>*/}
        </Flex>
    )
}
