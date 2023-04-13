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
        <div>Prediction Description: </div>
        {prediction_result?.description}
        <br />
        <div>Prediction Value: </div>
        {prediction_result?.value}
      </div>
    </Wrapper>
  );
};

export default PredictionResultsContainer;
