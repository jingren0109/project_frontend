import customFetch from "../../utils/axios";
import { clearValues } from "./PredictionSlice";

export const createPredictionThunk = async (prediction, thunkAPI) => {
  try {
    const resp = await customFetch.post("/predictions", prediction);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
