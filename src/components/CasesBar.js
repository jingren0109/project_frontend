import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
