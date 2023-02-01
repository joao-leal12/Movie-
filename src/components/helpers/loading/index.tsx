import { Flex, Spinner, Heading, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Logo } from '../../Logo';
import { IPropsLoading } from '../../../types/ApiType';

export const Loading = ({
  refs = null,
  positions = 'relative',
  Height = '100vh',
  text = 'carregando...',
  loading,
}: IPropsLoading) => {
  const ColorWord = useColorModeValue('#111', '#ddd');
  const ColorSpinner = useColorModeValue('#FB4340', '#767e70');

  useEffect(() => {
    if (loading === false) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <Flex
      min-height={Height}
      width="100%"
      position={positions}
      zIndex="100000000"
      justifyContent="center"
      alignItems="center"
      background="transparent "
      inset="0"
      ref={refs}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Flex>
          <Logo />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="10px"
          position="relative"
          top="-50px"
          width="100%"
        >
          <Heading as="h3" fontSize="3.2rem" color={ColorWord}>
            {text}
          </Heading>
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.60s"
            emptyColor="gray.200"
            color={ColorSpinner}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
