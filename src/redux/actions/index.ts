export const SET_USER_INFO = "SET_USER_INFO";

export const getGenres = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_IGDB_URL}/genres`, {
        method: "POST",
        body: "fields *;",
        headers: {
          "Client-ID": `${process.env.REACT_APP_CLIENT_ID}`,
          Authorization: `Baerer ${process.env.REACT_APP_ADMIN_TOKEN}`,
          mode: "cors",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("ey wey");
        console.log(data);
      } else {
        console.log("Error getting genres!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
