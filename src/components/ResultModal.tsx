import { Box } from '@chakra-ui/layout';
import { Modal } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { BiSave } from 'react-icons/bi';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import SaveResultForm from './SaveResultForm';
import { useGameStore } from '../store/gameStore';

interface ResultModalProps {
  isOpen: boolean;
  handleStart: () => void;
  clicked: number,
  board: number[];
  points: number
}

const calculateAccuracy = (points: number, clicked: number) => points / clicked * 100;

const ResultModal: FC<ResultModalProps> = ({
                                             isOpen,
                                             handleStart,
                                             clicked,
                                             points,
                                           }) => {

  const [showMailInput, setShowMailInput] = useState<boolean>(false);
  const accuracy = calculateAccuracy(points, clicked);
  const [submitted, setSubmitted] = useState<boolean>(false);
  // @ts-ignore
  // const { addItem } = useContext(GameDataContext);
  const addItem = useGameStore(state => state.addItem);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
    event.preventDefault();
    event.stopPropagation();
    setSubmitted(true);
    addItem({id: v4(), name, result: points, accuracy: Math.ceil(accuracy) }).then((data) => {
      console.log(data);
    });
  };


  return (
    <Modal isOpen={isOpen} onClose={() => {
      console.log('close modal');
    }}>
      <ModalOverlay />
      <ModalContent>
        {
          submitted ?
            (<Box>
              <Text>
                Your result successfully submitted.
              </Text>

              <Flex
                align='normal' justify='space-around' width='80%'
              >
                <Link to='/'>
                  <Button
                    w='150px'
                    m='3px'
                    colorScheme='red'
                    leftIcon={<BsArrowCounterclockwise />}
                    onClick={handleStart}>
                    Play again
                  </Button>
                </Link>
                <Link to='/results'>
                  <Button
                    m='10px'
                    w='150px'
                    leftIcon={<GiTrophyCup />}
                    colorScheme='yellow'
                  >
                    Results
                  </Button>
                </Link>
              </Flex>
            </Box>)
            :
            (<Box>

                <ModalHeader>
                  Time's up!
                </ModalHeader>
                <Center>
                  <Box p='10px' m='10px'>
                    <p> Your result is:<CountUp delay={0.5} end={points} duration={1.5} /></p>
                    <p>Accuracy:<CountUp delay={0.5} end={accuracy} duration={1.5} /> %</p>
                  </Box>
                </Center>
                <ModalBody>
                  <Flex
                    align='center'
                    justify='space-around'
                    direction='column'
                  >
                    <Flex
                      align='normal' justify='space-around' width='80%'
                    >
                      <Link to='/'>
                        <Button
                          w='150px'
                          m='3px'
                          colorScheme='red'
                          leftIcon={<BsArrowCounterclockwise />}
                          onClick={handleStart}>
                          Play again
                        </Button>
                      </Link>
                      <Button
                        w='150px'
                        m='3px'
                        variant='solid'
                        colorScheme='blue'
                        leftIcon={<BiSave />}
                        onClick={() => setShowMailInput(prev => !prev)}
                      >
                        Save result
                      </Button>
                    </Flex>

                    <Collapse in={showMailInput} animateOpacity>
                      <Flex m='15px'>
                        <SaveResultForm handleSubmit={handleSubmit} />
                      </Flex>
                    </Collapse>
                  </Flex>
                </ModalBody>

              </Box>
            )
        }

      </ModalContent>
    </Modal>
  );
};

export default ResultModal;
