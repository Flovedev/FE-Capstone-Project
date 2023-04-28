export const SET_USER_INFO = "SET_USER_INFO";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";
export const GET_SINGLE_GAME = "GET_SINGLE_GAME";

export const getGenres = () => {
  return async (dispatch: any) => {
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
  return async (dispatch: any) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/igdb/platforms");
      if (res.ok) {
        const data = await res.json();
        // console.log(data);
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
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/" + where + "/search/" + what
      );
      if (res.ok) {
        const data = await res.json();
        const sortedSearch = data?.sort(
          (a: any, b: any) => b.rating || 0 - a.rating || 0
        );
        dispatch({ type: SET_SEARCH_LIST, payload: sortedSearch });
        // console.log(data);
      } else {
        console.log("Error searching!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGame = (gameId: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/igdb/game/" + gameId
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_SINGLE_GAME, payload: data });
        // console.log(data);
      } else {
        console.log("Error getting single game!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
