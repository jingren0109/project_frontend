import axios from "axios";

const baseURL = "https://lendwise-api.azurewebsites.net";
// const baseURL = "http://127.0.0.1:5000";

const customFetch = axios.create({
  baseURL: baseURL,
});

export default customFetch;
