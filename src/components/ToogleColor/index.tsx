import { Box, Switch, useColorMode } from '@chakra-ui/react';

export const ToogleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box alignSelf="flex-start" padding="3rem">
      <Switch
        size="lg"
        colorScheme="dark"
        onChange={toggleColorMode}
        isChecked={colorMode === 'light'}
      />
    </Box>
  );
};
