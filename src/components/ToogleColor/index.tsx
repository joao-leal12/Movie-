import { Box, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';

export const ToogleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeSpinner = useColorModeValue('red', 'dark');
  return (
    <Box alignSelf="flex-start" padding="3rem">
      <Switch
        size="lg"
        colorScheme={ColorModeSpinner}
        onChange={toggleColorMode}
        isChecked={colorMode === 'light'}
      />
    </Box>
  );
};
