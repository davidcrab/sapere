import React from 'react';
import { Box } from '@chakra-ui/react';
import ChatMessage from './ChatMessages';

const ChatMessages = ({ messages }) => {
  return (
    <Box
      flex="1"
      overflowY="auto"
      padding="1rem"
      background="gray.100"
      borderRadius="md"
    >
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </Box>
  );
};

export default ChatMessages;
