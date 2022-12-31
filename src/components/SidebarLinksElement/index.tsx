import { SidebarChildrenLinks } from '../SidebarChildrenLinks';
import { Link, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { LinksElement } from '../../utils/LinksElement';
import { ILinksElements } from '../../types/ApiType';

export const SidebarLinksElement = () => {
  const ColorLink = useColorModeValue('#8A7E72', 'light.900');
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
                color: 'light.900',
              }}
              _activeLink={{
                color: 'light.900',
                backgroundColor: 'orange.900',
                paddingLeft: { base: 0, md: '2.5rem', lg: '2.5rem' },
              }}
              color={ColorLink}
              width="100%"
              {...rest}
            >
              <Flex
                alignItems="center"
                justifyContent={[
                  'center',
                  'center',
                  'flex-start',
                  'flex-start',
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
