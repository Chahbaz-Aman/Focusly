import React, { useContext } from 'react';
import { formatTime } from '../utils';
import { Box, Text } from "@chakra-ui/react";
import { MyContext } from '../../context';

const Timer = ({ isActive }) => {
  const { timer } = useContext(MyContext);

  return (
    <div className="app">
      <Box maxW='sm' borderColor='teal' p='1' color='black.400' borderWidth='1px' borderRadius='sm' fontSize='lg' mt='0'>
        <Box fontSize='sm'>
          Focused Time
        </Box>
        <Text fontSize="17" fontWeight="semibold">{formatTime(timer)}</Text>
      </Box>
    </div>
  );
}

export default Timer;
