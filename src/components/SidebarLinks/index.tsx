import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Flex, Text } from '@chakra-ui/react';
export const SidebarLinks = () => {
  return (
    <>
      <SidebarChildrenLinks>
        <NavLink to="/">
          <Flex align="center" gap="15px">
            <HouseLine size={32} />
            <Text>Home</Text>
          </Flex>
        </NavLink>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <NavLink to="/aventura">
          <Flex align="center" gap="15px">
            <Sword size={32} />
            <Text>Aventura</Text>
          </Flex>
        </NavLink>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <NavLink to="/drama">
          <Flex align="center" gap="15px">
            <MaskSad size={32} />
            <Text>Drama</Text>
          </Flex>
        </NavLink>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <NavLink to="/infantil">
          <Flex align="center" gap="15px">
            <Balloon size={32} />
            <Text>Infantil</Text>
          </Flex>
        </NavLink>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <NavLink to="/terror">
          <Flex align="center" gap="15px">
            <Ghost size={32} />

            <Text>Terror</Text>
          </Flex>
        </NavLink>
      </SidebarChildrenLinks>
    </>
  );
};
