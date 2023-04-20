import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage({ role: 'user', content: input.trim() });
      setInput('');
    }
  };

  return (
    <HStack as="form" onSubmit={handleSubmit} width="100%" padding="1rem">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        borderRadius="lg"
        flex="1"
      />
      <Button type="submit" colorScheme="blue" borderRadius="lg">
        Send
      </Button>
    </HStack>
  );
};

export default ChatInput;
