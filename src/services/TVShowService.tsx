import axios from "axios";

const API_URL = 'https://api.tvmaze.com/shows/6771'

const getEpisodeList = (page: number) => {
  return axios.get(
    API_URL+"/episodes?page="+page
  );
};

const getEpisode = (season: any, number : any) => {
  return axios.get(
    API_URL+`/episodebynumber?season=${season}&number=${number}`
  );
};

const TVShowService = {
  getEpisodeList,
  getEpisode
};

export default TVShowService;
