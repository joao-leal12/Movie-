import { InputSearchMovies } from '../InputSearhMovies';
import { SidebarItems } from '../SidebarItems';
import { SidebarWrapperContainer } from '../SidebarWrapperContainer';
import { Heading, useColorModeValue } from '@chakra-ui/react';
import { useContextCreate } from '../../hooks/useContextCreate';

export const Sidebar = () => {
  const { OpacityHome } = useContextCreate();
  const sidebarColor = useColorModeValue('light.900', '#767e70');
  const Shadow = useColorModeValue(
    '2px 6px 18px 0px #FB3F3F',
    '2px 6px 10px 0px #394334'
  );
  const genre = useColorModeValue('#000', '#fff');
  return (
    <SidebarWrapperContainer
      opacity={OpacityHome}
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
        color={genre}
      >
        Genero
      </Heading>
      <SidebarItems />
    </SidebarWrapperContainer>
  );
};
