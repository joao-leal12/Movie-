import { InputSearchMovies } from '../InputSearhMovies';
import { SidebarItems } from '../SidebarItems';
import { SidebarWrapperContainer } from '../SidebarWrapperContainer';
import { Heading } from '@chakra-ui/react';
export const Sidebar = () => {
  return (
    <SidebarWrapperContainer>
      <InputSearchMovies />
      <Heading
        fontSize="3.6rem"
        lineHeight="4.219rem"
        letterSpacing="0.18em"
        fontFamily="roboto"
        fontWeight="400"
        paddingLeft="1.2rem"
        marginTop="5rem"
        marginBottom="6.5rem"
      >
        Genero
      </Heading>
      <SidebarItems />
    </SidebarWrapperContainer>
  );
};
