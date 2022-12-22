import { Flex, Spinner, Heading } from '@chakra-ui/react';

export const Loading = ({ loading }: any) => {
  console.log(loading);
  return (
    <Flex
      height="100%"
      width="100% "
      position="absolute"
      backgroundImage="url(./src/assets/logo.svg)"
      backgroundPosition="center"
      justifyContent="center"
      alignItems="center"
      zIndex="100"
    >
      <Heading as="h3">carregando...</Heading>
      .
      <Spinner />
    </Flex>
  );
};
