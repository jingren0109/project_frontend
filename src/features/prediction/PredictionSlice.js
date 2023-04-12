import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createPredictionThunk } from "./predictionThunk";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  predictionLocation: "",
  predictionTypeOptions: ["full-time", "part-time", "remote", "internship"],
  predictionType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editPredictionId: "",
};

export const createPrediction = createAsyncThunk(
  "prediction/createPrediction",
  createPredictionThunk
);

const predictionSlice = createSlice({
  name: "prediction",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPrediction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPrediction.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Prediction Created");
      })
      .addCase(createPrediction.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues } = predictionSlice.actions;

export default predictionSlice.reducer;
