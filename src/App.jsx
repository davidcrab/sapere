import React from 'react';
import { Container } from '@chakra-ui/react';
import Chat from './components/Chat';

function App() {
  return (
    <Container
      maxWidth="md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Chat />
    </Container>
  );
}

export default App;
