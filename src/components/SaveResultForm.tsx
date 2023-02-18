import { Box } from '@chakra-ui/layout';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { BiSend } from 'react-icons/bi';

interface SaveResultFormProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => void;
}

const SaveResultForm: FC<SaveResultFormProps> = ({ handleSubmit }) => {
  const [name, setName] = useState<string>('');

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleSubmit(event, name);
  };

  return (
    <Box>
      <FormControl id='name'>
        <Input type='text'
               value={name}
               focusBorderColor='lime'
               onChange={(event) => setName(event.target.value)}
               placeholder='Add your name...'
               w='100%'
        />
        <Flex
          align='center'
          justify='space-around'
        >
          <Button
            m='10px'
            colorScheme='messenger'
            variant='solid'
            leftIcon={<BiSend />}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default SaveResultForm;
