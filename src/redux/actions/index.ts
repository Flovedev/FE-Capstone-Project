export const SET_USER_INFO = "SET_USER_INFO";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";

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
        dispatch({ type: GET_PLATFORMS, payload: data });
      } else {
        console.log("Error getting platforms!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
