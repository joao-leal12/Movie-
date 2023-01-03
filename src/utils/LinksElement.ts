// import { IconProps } from '@chakra-ui/react';
import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';
import { ILinksElements } from '../types/SidebarLinksElementsProps';
export const LinksElement: ILinksElements[] = [
  { genre: 'Home', Icon: HouseLine, id: 1, path: '/', end: true },
  { genre: 'Aventura', Icon: Sword, id: 2, path: '/movie/Adventure' },
  { genre: 'Drama', Icon: MaskSad, id: 3, path: '/movie/Drama' },
  { genre: 'Infantil', Icon: Balloon, id: 4, path: '/movie/Family' },
  { genre: 'Terror', Icon: Ghost, id: 5, path: '/movie/Horror' },
];
