import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Link, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
interface ILinks {
  text: string;
  icon: string[];
  path: string;
}
export const SidebarLinksElement = ({ text, icon, path, ...rest }: ILinks) => {
  return (
    <SidebarChildrenLinks>
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
        {...rest}
      >
        <Flex alignItems="center" gap="1.6rem">
          <Text>{text}</Text>
        </Flex>
      </Link>
    </SidebarChildrenLinks>
  );
};
