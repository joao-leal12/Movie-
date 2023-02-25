import { InputSearchMovies } from '../InputSearhMovies';
import { SidebarItems } from '../SidebarItems';
import { Heading, Box, useColorModeValue } from '@chakra-ui/react';

export const Sidebar = () => {
  const sidebarColor = useColorModeValue('light.900', '#767e70');
  const Shadow = useColorModeValue(
    '2px 6px 18px 0px #FB3F3F',
    '2px 6px 10px 0px #394334'
  );
  const colorModeSidebar = useColorModeValue('#000', '#fff');
  return (
    <Box
      as={'section'}
      flex={'1'}
      maxW={'28.5rem'}
      paddingTop={'6rem'}
      paddingBottom={'9.1rem'}
      maxH={'60.4rem'}
      borderTopRightRadius={'90px'}
      borderBottomRightRadius={'90px'}
      backgroundColor={sidebarColor}
      boxShadow={Shadow}
    >
      <InputSearchMovies />
      <Heading
        fontSize="3.6rem"
        lineHeight="4.219rem"
        letterSpacing="0.18em"
        fontFamily="roboto"
        fontWeight="400"
        paddingLeft="1.2rem"
        marginTop="3.6rem"
        marginBottom="5.6rem"
        display={['none', 'none', 'none', 'block']}
        color={colorModeSidebar}
      >
        Genero
      </Heading>
      <SidebarItems />
    </Box>
  );
};
