import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  chargedOffValues,
  clearValues,
  fullPaiedValues,
} from "../features/prediction/PredictionSlice";
import { useDispatch } from "react-redux";

const CasesBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => {
            dispatch(clearValues());
          }}
        >
          Fill New Application
        </Button>
        <Button
          onClick={() => {
            dispatch(fullPaiedValues());
          }}
        >
          Fully Paid Loan
        </Button>
        <Button
          onClick={() => {
            dispatch(chargedOffValues());
          }}
        >
          Charged-off Loan
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CasesBar;
