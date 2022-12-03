import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
export const InputSearchMovies = () => {
  return (
    <Box paddingInline="1.4rem">
      <InputGroup>
        <Input
          type="text"
          placeholder="Pesquisar"
          borderRadius="10rem"
          paddingInline="1.2rem"
          border="1px solid #8A7E72"
          minHeight="3.5rem"
          fontSize="1.8rem"
          _placeholder={{ color: 'dark.500' }}
        />
        <InputRightElement top="4px">
          <Button
            border="none"
            background="none"
            h="2.4rem"
            size="xl"
            paddingRight="1.4rem"
            _hover={{ background: 'none' }}
            _active={{ background: 'none' }}
          >
            <MagnifyingGlass size={18} color="#8A7E72" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
