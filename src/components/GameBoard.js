import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import Number from "./Number";

const GameBoard = ({table=[], makeRequest}) => {
    return (
        <Grid templateColumns="repeat(10, 1fr)" gap="5%" w="800px" h="80%" m="20px"
        >
            {table.map((e, index) =>
                <Number
                    makeRequest={makeRequest}
                    number={e}
                    key={index}/>
            )}

        </Grid>
    )
};

export default GameBoard;
