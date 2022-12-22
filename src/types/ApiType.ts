import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent } from 'react';

export interface IApiMovies {
  url: string;
  options?: string;
}

export interface IPropsMovieList {
  data: any;
  loading?: boolean;
}

export interface IMovieData {
  genre_ids: number[];
  title: string;
  id: number;
  vote_average: number;
  poster_path: string;
}

export interface ICardMovie {
  poster_path?: string;
  genre_ids?: number[];
  vote_average?: number;
}

export interface INavLinkProps {
  text: string;
}

export interface ILinksElements {
  genre: string;
  Icon: ForwardRefExoticComponent<IconProps>;
  id: number;
  path: string;
  end?: boolean;
}
