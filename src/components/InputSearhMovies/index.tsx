import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
import { useContextCreate } from '../../hooks/useContextCreate';

export const InputSearchMovies = () => {
  const { handleChangeInput, setOnInput } = useContextCreate();

  return (
    <Box paddingInline="1.4rem">
      <InputGroup>
        <Input
          type="text"
          placeholder="Pesquisar"
          borderRadius="10rem"
          paddingInline="1.2rem"
          border={['none', 'none', '1px solid #8A7E72']}
          minHeight="3.5rem"
          fontSize="1.8rem"
          _placeholder={{ color: 'dark.500' }}
          marginBottom={['1rem', '2.5rem', '0', '0']}
          onChange={(e) => handleChangeInput(e.target.value)}
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
            onClick={setOnInput.toggle}
          >
            <MagnifyingGlass size={18} color="#8A7E72" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
