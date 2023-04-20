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
        <h4>Prediction Results</h4>
        <div className="predictionResults">
          <div>No results to display.</div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Prediction Results</h3>
      <div className="predictionResults section-style">
        <h5>Nerual Network</h5>
        <br />
        <div>
          Rate: <br />
          {prediction_result
            ? `${(prediction_result?.nn?.value * 100).toFixed(4)}%`
            : ""}
        </div>
        <div>
          Explanation: <br />
          {prediction_result?.nn?.description}
        </div>
      </div>
      <div className="predictionResults section-style">
        <h5>eXtreme Gradient Boosting</h5>
        <br />
        <div>
          Rate: <br />
          {prediction_result
            ? `${(prediction_result?.xgb?.value * 100).toFixed(4)}%`
            : ""}
        </div>
        <div>
          Explanation: <br />
          {prediction_result?.xgb?.description}
        </div>
      </div>
      <div className="predictionResults section-style">
        <h5>NN & XGB Weighted Ensemble</h5>
        <br />
        <div>
          Rate: <br />
          {prediction_result
            ? `${(prediction_result?.ensemble?.value * 100).toFixed(4)}%`
            : ""}
        </div>
        <div>
          Explanation: <br />
          {prediction_result?.ensemble?.description}
        </div>
      </div>
    </Wrapper>
  );
};

export default PredictionResultsContainer;
