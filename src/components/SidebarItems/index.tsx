import { SidebarLinks } from '../SidebarLinks';
import { Flex } from '@chakra-ui/react';
import { useContextCreate } from '../../hooks/useContextCreate';
export const SidebarItems = () => {
  const { onInput } = useContextCreate();

  return (
    <Flex
      as="ul"
      flexDir="column"
      maxW={['5.4rem', '5.4rem', '5.4rem', '28.5rem']}
      gap="2.4rem"
      paddingInline={['0', '0', '0', '2.4rem']}
      width={onInput ? '28.5rem' : '54.4rem'}
    >
      <SidebarLinks />
    </Flex>
  );
};
