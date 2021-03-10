import React from "react";
import {Grid} from "@chakra-ui/react"
import Number from "./Number";

const GameBoard = ({table, checkGivenNumber}) => (
    <Grid templateColumns="repeat(10, 1fr)" gap="5%" w="800px" m="5px">
        {table && table.map((number, indexNummber) =>
            <Number
                checkGivenNumber={checkGivenNumber}
                number={number}
                key={indexNummber}/>
        )}
    </Grid>
);

export default GameBoard;
