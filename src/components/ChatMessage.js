import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ChatMessage = ({ message }) => {
  const { role, content } = message;

  return (
    <Box
      alignSelf={role === 'user' ? 'flex-end' : 'flex-start'}
      maxWidth="70%"
      marginBottom="1rem"
    >
      <Text
        padding="0.5rem"
        borderRadius="lg"
        background={role === 'user' ? 'blue.500' : 'gray.300'}
        color={role === 'user' ? 'white' : 'black'}
      >
        {content}
      </Text>
    </Box>
  );
};

export default ChatMessage;
