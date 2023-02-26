import { Box, Center, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { GameBoard } from '../components/GameBoard';
import { GameCounter } from '../components/GameCounter';
import { useGameStore } from '../store/gameStore';

export const BoardView: React.FC = () => {
  const gameTimeInSeconds = useGameStore(state => state.gameTimeInSeconds);

  const [clicked, setClicked] = useState(0);
  const [points, setPoints] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [board, setBoard] = useState<number[]>([]);

  // Increment clicked count
  const countNumberOfClicks = () => {
    setClicked(prevClicked => prevClicked + 1);
  };

  // Check if the given number is correct
  const checkGivenNumber = (number: number) => {
    if (number === currentNumber) {
      setCurrentNumber(prevNumber => prevNumber + 1);
      setPoints(prevPoints => prevPoints + 1);
      return true;
    } else {
      return false;
    }
  };

  // Remove the find key shortcut when the component mounts
  useEffect(() => {
    const removeFindKeyShortcut = (e: KeyboardEvent) => {
      if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', removeFindKeyShortcut);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', removeFindKeyShortcut);
    };
  }, []);

  // Generate random board numbers when the component mounts
  useEffect(() => {
    const boardNumbers = Array(100).fill(0).map((_, idx) => idx);
    setBoard(boardNumbers.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <Center>
      <Box onClick={countNumberOfClicks} zIndex="1">
        <Flex
          direction="column"
          align="center"
          height="100vw"
          backgroundColor="tertiary"
          mx="auto"
          px="20px"
        >
          <GameCounter
            gameTimeInSeconds={gameTimeInSeconds}
            clicked={clicked}
            board={board}
            points={points}
          />
          <GameBoard board={board} checkGivenNumber={checkGivenNumber} />
        </Flex>
      </Box>
    </Center>
  );
};

