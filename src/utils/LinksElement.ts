import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';
import { ILinksElements } from '../types/SidebarLinksElementsProps';
export const LinksElement: ILinksElements[] = [
  { genre: 'Home', Icon: HouseLine, id: 1, path: '/', end: 'end' },
  { genre: 'Aventura', Icon: Sword, id: 2, path: '/aventura' },
  { genre: 'Drama', Icon: MaskSad, id: 3, path: '/drama' },
  { genre: 'Infantil', Icon: Balloon, id: 4, path: '/infantil' },
  { genre: 'Terror', Icon: Ghost, id: 5, path: 'terror' },
];
