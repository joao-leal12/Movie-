import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Link, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { LinksElement } from '../../utils/LinksElement';

export const SidebarLinksElement = () => {
  return (
    <>
      {LinksElement.map(({ genre, Icon, id, path }) => (
        <SidebarChildrenLinks key={id}>
          <Link
            as={NavLink}
            to={path}
            _hover={{
              textDecor: 'none',
              paddingLeft: '2.5rem',
            }}
            _activeLink={{
              color: 'light.900',
              backgroundColor: 'orange.900',
              paddingLeft: '2.5rem',
            }}
            width="100%"
          >
            <Flex alignItems="center" gap="1.6rem">
              <Icon size={32} />
              <Text>{genre}</Text>
            </Flex>
          </Link>
        </SidebarChildrenLinks>
      ))}
    </>
  );
};
