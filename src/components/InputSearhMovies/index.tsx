import { Box, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
export const InputSearchMovies = () => {
  return (
    <Box paddingInline="1.2rem">
      <InputGroup>
        <Input type="text" placeholder="Pesquisar" />
        <InputRightElement>
          <MagnifyingGlass />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
