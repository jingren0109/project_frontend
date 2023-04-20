import axios from "axios";

const baseURL = "https://lendwise.azurewebsites.net";

const customFetch = axios.create({
  baseURL: baseURL,
});

export default customFetch;
