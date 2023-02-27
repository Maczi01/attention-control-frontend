import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import { FC } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import ResultModal from './ResultModal';
import StartWindow from './StartWindow';

interface GameCounterProps {
  gameTimeInSeconds: number;
  clicked: number;
  board: number[];
  points: number;
}

export const GameCounter: FC<GameCounterProps> = ({ gameTimeInSeconds, clicked, board, points }) => {
  const [elapsedTime, setElapsedTime] = useState(gameTimeInSeconds);
  const [isActive, setIsActive] = useState(false);

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { isOpen: isOpenReportModal, onOpen: onOpenReportModal } = useDisclosure();
  const countRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    setElapsedTime(gameTimeInSeconds);
  }, [gameTimeInSeconds]);

  useEffect(() => {
    if (elapsedTime < 1) {
      clearInterval(countRef.current as NodeJS.Timeout);
      setIsActive(false);
      onOpenReportModal();
    }
  }, [elapsedTime]);

  const handleStart = () => {
    if (isActive) {
      clearInterval(countRef.current as NodeJS.Timeout);
      setIsActive(false);
    } else if (elapsedTime > 1) {
      setIsActive(true);
      countRef.current = setInterval(() => {
        setElapsedTime((elapsedTime) => elapsedTime - 1);
      }, 1000);
    }
  };

  return (
    <Box filter="blur(20px)">
      <StartWindow isOpen={isOpen} onClose={onClose} handleStart={handleStart} />
      <ResultModal
        isOpen={isOpenReportModal}
        clicked={clicked}
        board={board}
        points={points}
        handleStart={handleStart}
      />
    </Box>
  );
};
