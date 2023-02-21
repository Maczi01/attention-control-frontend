import { useEffect, useRef, useState } from 'react';

interface UseGameCounterProps {
  gameTimeInSeconds: number;
  onGameOver: () => void;
}

export const useGameCounter = ({ gameTimeInSeconds, onGameOver }: UseGameCounterProps) => {
  const [elapsedTime, setElapsedTime] = useState(gameTimeInSeconds);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setElapsedTime(gameTimeInSeconds);
  }, [gameTimeInSeconds]);

  useEffect(() => {
    if (elapsedTime < 1) {
      clearInterval(countRef.current as NodeJS.Timeout);
      onGameOver();
    }
  }, [elapsedTime]);

  const startGame = () => {
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

  return { elapsedTime, isActive, startGame };
};
