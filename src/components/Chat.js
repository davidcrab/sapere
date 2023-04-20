import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Handle sending message to the Chat API and receiving a response
  };

  return (
    <VStack width="100%" height="100%" spacing={4}>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </VStack>
    )
};

export default Chat;
