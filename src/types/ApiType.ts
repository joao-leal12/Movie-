import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent, ReactNode, RefObject } from 'react';

export interface IApiMovies {
  url: string;
  options?: string;
}

export interface IPropsMovieList {
  data: IMovieData[];
  loading?: boolean;
  load: boolean;
  observer: any;
}

export interface IMovieData {
  genre_ids: number[];
  title: string;
  id: number;
  vote_average: number;
  poster_path: string;
}
export interface IGenresFilter {
  genre: number[];
  inforGenre?: IGenresCard[];
}

export interface ICardMovie {
  poster_path?: string;
  genre_ids?: number[];
  vote_average?: number;
}

export interface IMountCardMovie {
  dataMovie: IMovieData;
  inforGenres?: IGenresCard[];
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

export interface IGenre {
  id: number;
  name: string;
}

export interface IStars {
  rating: number;
}

export interface IRoutes {
  data: IMovieData[] | null;
  loading: boolean;
}

export interface IMovieFilter {
  data: IMovieData[] | null;
  getMovieData: () => void;
  setDataMovies: any;
  loading: boolean;
}

export interface IGenresCard {
  id: number;
  name: string;
}

export interface Ichildren {
  children: ReactNode;
}

export interface IPropsLoading {
  refs?: RefObject<HTMLDivElement> | null;
  positions?: any;
  Height?: string;
  text?: string;
  loading?: boolean;
}
