import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Link, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ILinksElements } from '../../types/SidebarLinksElementsProps';
export const SidebarLinksElement = ({
  text,
  Icon,
  path,
  ...rest
}: ILinksElements) => {
  return (
    <SidebarChildrenLinks>
      <Link
        as={NavLink}
        to={path}
        {...rest}
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
          <Text>{text}</Text>
        </Flex>
      </Link>
    </SidebarChildrenLinks>
  );
};
