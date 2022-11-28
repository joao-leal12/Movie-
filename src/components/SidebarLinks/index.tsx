import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Text, Link, Flex } from '@chakra-ui/react';
export const SidebarLinks = () => {
  return (
    <>
      <SidebarChildrenLinks>
        <Link
          _hover={{
            textDecor: 'none',
            paddingLeft: '2.5rem',
          }}
          as={NavLink}
          width="100%"
          to="/"
          end
          _activeLink={{
            color: 'light.900',
            backgroundColor: 'orange.900',
            paddingLeft: '2.5rem',
          }}
        >
          <Flex alignItems="center" gap="1.6rem">
            <HouseLine size={32} />
            <Text as="span">Home</Text>
          </Flex>
        </Link>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <Link
          _hover={{ textDecor: 'none', paddingLeft: '2.5rem' }}
          gap="1.6rem"
          _activeLink={{
            color: 'light.900',
            backgroundColor: 'orange.900',
            paddingLeft: '2.5rem',
          }}
          width="100%"
          as={NavLink}
          to="aventura"
        >
          <Flex alignItems="center" gap="1.6rem">
            <Sword size={32} />
            <Text as="span">Ação e Aventura</Text>
          </Flex>
        </Link>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <Link
          _hover={{ textDecor: 'none', paddingLeft: '2.5rem' }}
          gap="1.6rem"
          as={NavLink}
          to="/drama"
          _activeLink={{
            color: 'light.900',
            backgroundColor: 'orange.900',
            paddingLeft: '2.5rem',
          }}
          width="100%"
        >
          <Flex alignItems="center" gap="1.6rem">
            <MaskSad size={32} />
            <Text as="span">Drama</Text>
          </Flex>
        </Link>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <Link
          _hover={{ textDecor: 'none', paddingLeft: '2.5rem' }}
          gap="1.6rem"
          as={NavLink}
          to="/infantil"
          _activeLink={{
            color: 'light.900',
            backgroundColor: 'orange.900',
            paddingLeft: '2.5rem',
          }}
          width="100%"
        >
          <Flex alignItems="center" gap="1.6rem">
            <Balloon size={32} />
            <Text as="span">Infantil</Text>
          </Flex>
        </Link>
      </SidebarChildrenLinks>
      <SidebarChildrenLinks>
        <Link
          _hover={{ textDecor: 'none', paddingLeft: '2.5rem' }}
          gap="1.6rem"
          as={NavLink}
          to="/terror"
          _activeLink={{
            color: 'light.900',
            backgroundColor: 'orange.900',
            paddingLeft: '2.5rem',
          }}
          width="100%"
        >
          <Flex alignItems="center" gap="1.6rem">
            <Ghost size={32} />
            <Text as="span">Terror</Text>
          </Flex>
        </Link>
      </SidebarChildrenLinks>
    </>
  );
};
