import { Box } from '@chakra-ui/react';

export const Eskeleton = () => {
  return (
    <Box
      p="2.4rem"
      width="343px"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
      overflow="hidden"
      backgroundColor="red"
    ></Box>
  );
};
