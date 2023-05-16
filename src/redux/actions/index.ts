import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { IOver, IUser } from "../interfaces/IUser";
import { IGame } from "../interfaces/IGame";

export const SET_USER_INFO = "SET_USER_INFO";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";
export const GET_SINGLE_GAME = "GET_SINGLE_GAME";
export const GET_TITLE_NAME = "GET_TITLE_NAME";
export const GET_DISCOVER = "GET_DISCOVER";

export const userLogin = (emailValue: string, passwordValue: string) => {
  const userCredentials = {
    email: emailValue,
    password: passwordValue,
  };

  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/users/session", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.accessToken);
        dispatch({ type: SET_USER_INFO, payload: data.user });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMe = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: SET_USER_INFO, payload: data });
      } else {
        console.log("Error getting me!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerUser = (userInfo: IUser) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/users/account", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.accessToken);
        dispatch({ type: SET_USER_INFO, payload: data.user });
      } else {
        console.log("Error getting me!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putMe = (userInfo: IUser) => {
  const accessToken = localStorage.getItem("accessToken");
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
        method: "PUT",
        body: JSON.stringify(userInfo),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: SET_USER_INFO, payload: data });
      } else {
        console.log("Error putting me!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMe = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        dispatch({ type: SET_USER_INFO, payload: null });
        localStorage.removeItem("accessToken");
      } else {
        console.log("Error getting me!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
  return async (dispatch: any) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const file = event.target.files?.[0];
      const formData = new FormData();
      formData.append("avatar", file!);
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/users/me/avatar",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        dispatch(getMe());
      } else {
        console.log("Error with the avatar!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeBG = (url: string) => {
  const toSend = {
    bgLink: url,
  };

  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/users/me/background",
        {
          method: "POST",
          body: JSON.stringify(toSend),
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: SET_USER_INFO, payload: data });
      } else {
        console.log("Error change me background!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGenres = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/igdb/genres");
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_GENRES, payload: data });
        // console.log(data);
      } else {
        console.log("Error getting genres!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/igdb/platforms");
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_PLATFORMS, payload: data });
      } else {
        console.log("Error getting platforms!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchApi = (where: string, what: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/" + where + "/search/" + what
      );
      if (res.ok) {
        const data = await res.json();
        const sortedSearch = data?.sort(
          (a: IGame, b: IGame) => (b.rating || 0) - (a.rating || 0)
        );
        dispatch({ type: SET_SEARCH_LIST, payload: sortedSearch });
      } else {
        console.log("Error searching!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGame = (gameId: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/game/" + gameId
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_SINGLE_GAME, payload: data });
      } else {
        console.log("Error getting single game!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGenreGames = (genreId: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/genre/" + genreId
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: SET_SEARCH_LIST, payload: data });
      } else {
        console.log("Error getting genre games!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPlatformGames = (platformId: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/platform/" + platformId
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: SET_SEARCH_LIST, payload: data });
      } else {
        console.log("Error getting platform games!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiscover = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/igdb/discover");
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_DISCOVER, payload: data });
      } else {
        console.log("Error getting discover!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const overRequest = (
  category: "favourites" | "pending" | "over",
  game: IOver
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/games/" + category,
        {
          method: "POST",
          body: JSON.stringify(game),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.ok) {
        dispatch(getMe());
      } else {
        console.log("Error with over!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
