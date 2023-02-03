import { MotionBox } from '../../Styles/animation';
interface IEskeletonProps {
  load: boolean;
}
export const Eskeleton = ({ load }: IEskeletonProps) => {
  return (
    <MotionBox
      opacity={!load ? '1' : '0'}
      position={!load ? 'relative' : 'absolute'}
      p="2.4rem"
      width="315px"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
      overflow="hidden"
      backgroundColor={'#eee'}
      backgroundImage={'linear-gradient(90deg, #eee 0px, #Fff 50%, #eee 100%)'}
      backgroundSize={'200%'}
      marginBottom={'2rem'}
      initial="hidden"
      animate={{
        backgroundPosition: ['0', '200%'],
        transitionTimingFunction: 'linear',
        transition: { repeat: Infinity },
      }}
    />
  );
};

// Animaçção -> 1.5s infinite linear

// Keyframes => from -> background-position: 0px para backgroind-positionk - -200
