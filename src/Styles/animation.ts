import { motion } from 'framer-motion';
import { Flex, FlexProps, Box, BoxProps } from '@chakra-ui/react';

export const MotionFlex = motion<FlexProps>(Flex);

export const MotionBox = motion<BoxProps>(Box);

export const animationContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
