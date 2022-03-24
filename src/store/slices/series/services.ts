import axios from "axios";
import { setSeriesList } from "./seriesSlice";

export const fetchSeries = (name: string) => (dispatch: any) => {
  axios
    .get(`https://api.tvmaze.com/search/shows?q=${name}`)
    .then((response) => {
        console.log(' this is the response', response.data)
      dispatch(setSeriesList(response.data));
    })
    .catch((error) => console.log(error));
};
