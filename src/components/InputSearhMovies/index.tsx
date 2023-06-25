import { MutableRefObject, useRef } from 'react';
import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { MagnifyingGlass } from 'phosphor-react';
import { useContextCreate } from '../../hooks/useContextCreate';
export const InputSearchMovies = () => {
  const { handleStates } = useContextCreate();
  const PlaceHolder = useColorModeValue('dark.500', 'white');
  const Border = useColorModeValue('1px solid #8A7E72', '1px solid #eee');
  const ColorGlass = useColorModeValue('black ', 'white');
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  return (
    <Box paddingInline="1.4rem">
      <InputGroup>
        <Input
          type="text"
          placeholder="Pesquisar"
          borderRadius="10rem"
          paddingInline="1.2rem"
          border={['none', 'none', Border]}
          minHeight="3.5rem"
          fontSize="1.8rem"
          color={PlaceHolder}
          _placeholder={{ color: PlaceHolder }}
          marginBottom={['1rem', '2.5rem', '0', '0']}
          onKeyDown={(e) => handleStates(e, inputRef)}
          ref={inputRef}
        />
        <InputRightElement top="4px">
          <Button
            onClick={(e) => handleStates(e, inputRef)}
            border="none"
            background="none"
            h="2.4rem"
            size="xl"
            paddingRight="1.4rem"
            _hover={{ background: 'none' }}
            _active={{ background: 'none' }}
          >
            <MagnifyingGlass size={18} color={ColorGlass} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
