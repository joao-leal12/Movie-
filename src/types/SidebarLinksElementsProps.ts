import { IconProps } from 'phosphor-react';
import React from 'react';

export interface ILinksElements {
  genre: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  id: number;
  path: string;
  end?: boolean;
}
