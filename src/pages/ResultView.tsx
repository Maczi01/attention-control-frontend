import { Button, Center, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useGameStore } from '../store/gameStore';

interface Result {
  id: string;
  name: string;
  points: number;
  accuracy: number;
}

export const ResultView: React.FC = () => {
  const getResultsList = useGameStore(state => state.getResultsList);
  console.log('results in res view', getResultsList);

  const [results, setResults] = useState<Result[]>([]);

  useEffect(async () => {
    const res = await getResultsList();
    setResults(res);
  }, []);
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

      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Number</Th>
            <Th>Name</Th>
            <Th>Score</Th>
            {/*<Th>Date</Th>*/}
            <Th>Accuracy</Th>
            {/*<Th>Info</Th>*/}
            {/*<Th>Action</Th>*/}
          </Tr>
        </Thead>
        <Tbody>
          {results && results.map((result: {
            name: string;
            points: number;
            accuracy: number;
            id: string
          }, index: number) => (
            <Tr key={result.id}>
              <Td>{index + 1}</Td>
              <Td>{result.name}</Td>
              <Td>{result.result}</Td>
              <Td>{result.accuracy}</Td>
              {/*<Td>*/}
              {/*    /!*    <Button onClick={() => history.push(`/playersresult/${result.id}`)}> Details*!/*/}
              {/*    /!*</Button>*!/*/}
              {/*</Td>*/}
              {/*<Td><Button onClick={() => deleteResultFromList(result.id)}>*/}
              {/*    Remove*/}
              {/*</Button></Td>*/}
            </Tr>
          ))
          }
        </Tbody>
      </Table>
    </Flex>
  );
};
