import { configureStore } from "@reduxjs/toolkit";
import predictionSlice from "./features/prediction/PredictionSlice";

export const store = configureStore({
  reducer: {
    prediction: predictionSlice,
  },
});
