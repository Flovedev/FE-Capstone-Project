export interface IUser {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  games: {
    favourites: string[];
    over: string[];
    sent: string[];
  };
  social: {
    friends: string[];
    pending: string[];
    sent: string[];
  };
}
