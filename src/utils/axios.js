import axios from "axios";

const baseURL = "https://c8665cb6-b65f-4474-b07a-8a48046f227f.mock.pstmn.io";

const customFetch = axios.create({
  baseURL: baseURL,
});

export default customFetch;
