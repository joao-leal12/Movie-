import { useColorModeValue } from '@chakra-ui/react';
import { MotionBox } from '../../Styles/animation';
interface IEskeletonProps {
  load: boolean;
}
export const Eskeleton = ({ load }: IEskeletonProps) => {
  const bg = useColorModeValue('#eee', '#767E70');
  const bgTwo = useColorModeValue('#fff', '#9da09d');
  return (
    <MotionBox
      opacity={!load ? '1' : '0'}
      position={!load ? 'relative' : 'absolute'}
      p="2.4rem"
      width="315px"
      height="451px"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
      overflow="hidden"
      backgroundColor={bg}
      backgroundImage={`linear-gradient(90deg, ${bg} 0px , ${bgTwo} 50% , ${bg} 100%)`}
      backgroundSize={'200%'}
      marginBottom={'2rem'}
      initial="hidden"
      animate={{
        backgroundPosition: ['0', '200%'],
        transitionTimingFunction: 'linear',
        transition: { repeat: Infinity },
        scale: 1,
      }}
    />
  );
};

// Animaçção -> 1.5s infinite linear

// Keyframes => from -> background-position: 0px para backgroind-positionk - -200
