import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4/blogs/',
});