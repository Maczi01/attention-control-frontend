import { Box } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import { useGameCounter } from '../hooks/hooks';
import ResultModal from './ResultModal';
import StartWindow from './StartWindow';

interface GameCounterProps {
  gameTimeInSeconds: number; // The initial time for the game in seconds
  clicked: number; // The number of times the game has been clicked
  board: number[]; // The game board as a 2D array of strings
  points: number; // The player's score in the game
}
export const GameCounter: FC<GameCounterProps> = ({ gameTimeInSeconds, clicked, board, points }) => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });
  const { elapsedTime, isActive, startGame } = useGameCounter({
    gameTimeInSeconds,
    onGameOver: onOpen,
  });

  return (
    <>
      <Box filter='blur(20px)'>
        <StartWindow isOpen={isOpen} onClose={onClose} handleStart={startGame} />
      </Box>
      <ResultModal isOpen={!isActive} clicked={clicked} board={board} points={points} handleStart={startGame} />
    </>
  );
};
