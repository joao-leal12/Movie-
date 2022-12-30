import { InputSearchMovies } from '../InputSearhMovies';
import { SidebarItems } from '../SidebarItems';
import { SidebarWrapperContainer } from '../SidebarWrapperContainer';
import { Heading } from '@chakra-ui/react';
import { useContextCreate } from '../../hooks/useContextCreate';
export const Sidebar = () => {
  const { OpacityHome } = useContextCreate();

  return (
    <SidebarWrapperContainer opacity={OpacityHome}>
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
      >
        Genero
      </Heading>
      <SidebarItems />
    </SidebarWrapperContainer>
  );
};
