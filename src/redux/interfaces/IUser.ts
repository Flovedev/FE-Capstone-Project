export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  games: {
    favourites: IOver[];
    over: IOver[];
    sent: IOver[];
  };
  social: {
    friends: string[];
    pending: string[];
    sent: string[];
  };
}

export interface IOver {
  _id: number;
  name: string;
  cover: string;
  rating: number;
}
