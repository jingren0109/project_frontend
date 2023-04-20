import React, { useState } from "react";
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
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCaseClick = (caseName) => {
    setSelectedCase(caseName);
  };

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => {
            dispatch(clearValues());
            handleCaseClick(null);
          }}
          style={{
            backgroundColor: selectedCase === null ? "#f0f0f0" : "white",
            width: "300px",
          }}
        >
          Predict New Loan
        </Button>
        <Button
          onClick={() => {
            dispatch(fullPaiedValues());
            handleCaseClick("fullyPaid");
          }}
          style={{
            backgroundColor: selectedCase === "fullyPaid" ? "#f0f0f0" : "white",
            width: "300px",
          }}
        >
          Fully Paid Loan
        </Button>
        <Button
          onClick={() => {
            dispatch(chargedOffValues());
            handleCaseClick("chargedOff");
          }}
          style={{
            backgroundColor:
              selectedCase === "chargedOff" ? "#f0f0f0" : "white",
            width: "300px",
          }}
        >
          Charged-off Loan
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CasesBar;
