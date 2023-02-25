// import { IconProps } from '@chakra-ui/react';
import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';
import { ILinksElements } from '../types/ApiType';
export const LinksElement: ILinksElements[] = [
  { genre: 'Home', Icon: HouseLine, id: 1, path: '/', end: true },
  { genre: 'Aventura', Icon: Sword, id: 2, path: 'Adventure' },
  { genre: 'Drama', Icon: MaskSad, id: 3, path: 'Drama' },
  { genre: 'Infantil', Icon: Balloon, id: 4, path: 'Family' },
  { genre: 'Terror', Icon: Ghost, id: 5, path: 'Horror' },
];
