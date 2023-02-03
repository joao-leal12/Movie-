import { Container } from '@chakra-ui/react';
import { Home } from '../../pages/Home';
import { Sidebar } from '../Sidebar';
export const MainContainer = () => {
  return (
    <Container as="main" maxWidth="100%" display="flex" padding="0" gap="4rem">
      <Sidebar />
      <Home />
    </Container>
  );
};
