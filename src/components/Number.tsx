import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useState } from 'react';

interface Props {
  number: number;
  checkGivenNumber: (number: number) => boolean;
}

const Number: FC<Props> = ({ number, checkGivenNumber }) => {
  const [active, setActive] = useState(false);
  const activate = (number: number) => {
    if (checkGivenNumber(number)) {
      setActive(true);
    }
  };

  return (
    <Button
      disabled={active}
      size="md"
      colorScheme={active ? 'gray' : 'purple'}
      height="48px"
      width="48px"
      border="2px"
      borderColor="yellow.500"
      _hover={{
        bg: 'red',
        transform: 'scale(1.1)',
      }}
      _focus={{
        boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      onClick={() => activate(number)}
    >
      {number}
    </Button>
  );
};

export default Number;
