export interface IUser {
  _id?: number;
  username?: string;
  password?: string;
  email?: string;
  info?: string;
  avatar?: string;
  background?: string;
  games?: {
    favourites: IOver[];
    pending: IOver[];
    over: IOver[];
  };
  social?: {
    friends: string[];
    pending: string[];
    sent: string[];
  };
}

export interface IOver {
  id: number;
  name: string;
  cover: string;
  rating: number;
  release_date: string;
  platforms: IPlatGen[];
  genres: IPlatGen[];
}

export interface IPlatGen {
  id: number;
  name: string;
}
