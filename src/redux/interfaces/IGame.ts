export interface IGame {
  id: number;
  name: string;
  cover: {
    id: number;
    url: string;
  };
  genres: IGenre[];
  platforms: IPlatform[];
  summary: string;
  language_supports: ILanguage[];
  involved_companies: ICompany[];
  rating: number;
  screenshots: IScreenshot[];
  similar_games: ISimilar[];
  videos: IVideo[];
  artworks: IArwork[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IPlatform {
  id: number;
  name: string;
  abbreviation?: string;
  platform_logo: {
    id: number;
    url: string;
  };
}

export interface ICompany {
  company: {
    id: number;
    name: string;
  };
  developer: boolean;
  publisher: boolean;
  porting: boolean;
  supporting: boolean;
}

export interface ILanguage {
  language: {
    id: number;
    name: string;
  };
}

export interface IScreenshot {
  id: number;
  url: string;
}

export interface ISimilar {
  id: number;
  name: string;
  cover: {
    id: number;
    url: string;
  };
  rating: string;
}

export interface IVideo {
  name: string;
  video_id: string;
}

export interface IArwork {
  id: number;
  url: string;
}
