export interface IGame {
  id: number;
  name: string;
  cover: {
    url: string;
  };
  genre: {
    name: string;
  };
  involved_companies: {
    company: {
      id: number;
      name: string;
    };
    developer: boolean;
    publisher: boolean;
    porting: boolean;
    supporting: boolean;
  };
  platform: {
    id: number;
    name: string;
    abbreviation: string;
    platform_logo: {
      url: string;
    };
  };
  rating: number;
  screenshots: {
    url: string;
  };
  similar_games: {
    id: number;
    name: string;
    cover: {
      url: string;
    };
    rating: number;
  };
  videos: {
    name: string;
    video_id: string;
  };
}
