import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent } from 'react';

export interface ILinksElements {
  genre: string;
  Icon: ForwardRefExoticComponent<IconProps>;
  id: number;
  path: string;
  end?: boolean;
}
