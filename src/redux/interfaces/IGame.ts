export interface IGame {
  id: string;
  name: string;
  cover: {
    url: string;
  };
  genres: {
    name: string;
  }[];
  summary: string;
  language_supports: {
    language: {
      name: string;
    };
  }[];
  involved_companies: {
    company: {
      id: number;
      name: string;
    };
    developer: boolean;
    publisher: boolean;
    porting: boolean;
    supporting: boolean;
  }[];
  platforms: {
    id: number;
    name: string;
    abbreviation: string;
    platform_logo: {
      url: string;
    };
  }[];
  rating: string;
  screenshots: {
    id: string;
    url: string;
  }[];
  similar_games: {
    id: number;
    name: string;
    cover: {
      url: string;
    };
    rating: number;
  }[];
  videos: {
    name: string;
    video_id: string;
  }[];
}
