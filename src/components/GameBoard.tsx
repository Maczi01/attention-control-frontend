import { Grid } from '@chakra-ui/react';
import React from 'react';

import Number from './Number';

interface GameBoardProps {
  board: number[];
  checkGivenNumber: (number: number) => boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({ board, checkGivenNumber }) => (
  <Grid templateColumns="repeat(10, 1fr)" gap="4%" w="900px" m="5px">
    {board &&
      board.map((number: number, indexNumber: number) => (
        <Number checkGivenNumber={checkGivenNumber} number={number} key={indexNumber} />
      ))}
  </Grid>
);
