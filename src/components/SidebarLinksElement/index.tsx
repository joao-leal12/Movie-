import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Link, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { LinksElement } from '../../utils/LinksElement';
import { ILinksElements } from '../../types/ApiType';
export const SidebarLinksElement = () => {
  return (
    <>
      {LinksElement.map(
        ({ genre, Icon, id, path, ...rest }: ILinksElements) => (
          <SidebarChildrenLinks key={id}>
            <Link
              as={NavLink}
              to={path}
              _hover={{
                textDecor: 'none',
                paddingLeft: { base: 0, md: 0, lg: '2.5rem' },
              }}
              _activeLink={{
                color: 'light.900',
                backgroundColor: 'orange.900',
                paddingLeft: { base: 0, md: 0, lg: '2.5rem' },
              }}
              width="100%"
              {...rest}
            >
              <Flex
                alignItems="center"
                justifyContent={[
                  'flex-start',
                  'flex-start',
                  'center',
                  'center',
                ]}
                gap=".8rem"
                width="100%"
              >
                <Icon size={32} alt={genre} />
                <Text display={['none', 'none', 'none ', 'block']}>
                  {genre}
                </Text>
              </Flex>
            </Link>
          </SidebarChildrenLinks>
        )
      )}
    </>
  );
};
