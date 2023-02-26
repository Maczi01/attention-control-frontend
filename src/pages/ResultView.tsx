import { Button, Center, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getResults } from '../api/api';

interface Result {
  id: string;
  name: string;
  points: number;
  accuracy: number;
}

export const ResultView: React.FC = () => {
  const { data, error, isLoading,  } = useQuery('results', getResults);
console.log(data)

  return (
    <Flex
      direction='column'
      align='center'
      justify='space-around'
      width='85%'
      backgroundColor='#ffd803'
      mx='auto'
    >
      <Center><h2>Results</h2></Center>
      <Link to='/'>
        <Button
          w='150px'
          m='3px'
          colorScheme='red'
          leftIcon={<BsArrowCounterclockwise />}
        >
          Play again
        </Button>
      </Link>
      <Center>
        <Flex justify='space-between'>
          <Button size='xs'>Best results</Button>
          <Button size='xs'>Best accuracy</Button>
          <Button size='xs'>Last results</Button>
          <Button size='xs'>Worst results</Button>
        </Flex>
      </Center>
      {error && <p>Cannot fetch results</p>}
      {isLoading ? <p>Loading...</p> :
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Number</Th>
            <Th>Name</Th>
            <Th>Score</Th>
            <Th>Accuracy</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((result: Result, index: number) => (
            <Tr key={result.id}>
              <Td>{index + 1}</Td>
              <Td>{result.name}</Td>
              <Td>{result.points}</Td>
              <Td>{result.accuracy}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      }
    </Flex>
  );
};
