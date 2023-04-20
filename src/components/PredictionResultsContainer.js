import Wrapper from "../assets/wrappers/PredictionResultsContainer";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const PredictionResultsContainer = () => {
  const { isLoading, prediction_result } = useSelector(
    (store) => store.prediction
  );

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (!prediction_result) {
    return (
      <Wrapper>
        <h4>Prediction Result</h4>
        <div className="predictionResults">
          <div>No results to display.</div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>Prediction Result</h5>
      <div className="predictionResults">
        <div>
          Rate: <br />
          {prediction_result
            ? `${(prediction_result.value * 100).toFixed(4)}%`
            : ""}
        </div>
        <div>
          Explanation: <br />
          {prediction_result?.description}
        </div>
      </div>
    </Wrapper>
  );
};

export default PredictionResultsContainer;
