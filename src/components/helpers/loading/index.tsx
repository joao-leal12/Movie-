import { Flex, Spinner, Heading } from '@chakra-ui/react';
import { useEffect, RefObject } from 'react';

export interface IPropsLoading {
  refs?: RefObject<HTMLDivElement> | null;
  positions?: any;
  Height?: string;
  text?: string;
  overFlow?: string;
  OpacityEl?: string;
}

export const Loading: React.FC<IPropsLoading> = ({
  refs = null,
  positions,
  Height = '100vh',
  text = 'carregando...',
  overFlow = 'auto',
  OpacityEl,
}: IPropsLoading) => {
  useEffect(() => {
    document.body.style.overflow = overFlow;
  }, [overFlow]);

  return (
    <Flex
      min-height={Height}
      width="100"
      position={positions}
      zIndex="100000000"
      justifyContent="center"
      alignItems="center"
      backgroundImage="radial-gradient(50% 50% at 50% 50%, #FB3F3F 0%, #FC8346 100%)  "
      inset="0"
      ref={refs}
      overflow="hidden"
      opacity={OpacityEl}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Flex
          backgroundImage="url(./src/assets/logo.svg)"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width="100%"
          height="237px"
        ></Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="10px"
          position="relative"
          top="-50px"
          width="100%"
        >
          <Heading as="h3" fontSize="3.2rem">
            {text}
          </Heading>
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.60s"
            emptyColor="gray.200"
            color="#FB4340"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
