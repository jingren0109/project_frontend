import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FormRow, FormRowSelect, BigSidebar, Navbar } from "../components";
import {
  handleChange,
  clearValues,
  createPrediction,
} from "../features/prediction/PredictionSlice";
import SharedWrapper from "../assets/wrappers/SharedLayout";

const AddPrediction = () => {
  const {
    isLoading,
    position,
    company,
    predictionLocation,
    predictionType,
    predictionTypeOptions,
    status,
    statusOptions,
  } = useSelector((store) => store.prediction);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !predictionLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(
      createPrediction({
        position,
        company,
        predictionLocation,
        predictionType,
        status,
      })
    );
  };

  const handlePredictionInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <SharedWrapper>
      <main className="dashboard">
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Wrapper>
              <form className="form">
                <h3>loan prediction</h3>
                <div className="form-center">
                  {/* position */}
                  <FormRow
                    type="text"
                    name="position"
                    value={position}
                    handleChange={handlePredictionInput}
                  />
                  {/* company */}
                  <FormRow
                    type="text"
                    name="company"
                    value={company}
                    handleChange={handlePredictionInput}
                  />
                  {/* predictionLocation */}
                  <FormRow
                    type="text"
                    name="predictionLocation"
                    value={predictionLocation}
                    labelText="prediction location"
                    handleChange={handlePredictionInput}
                  />
                  {/* status */}
                  <FormRowSelect
                    name="status"
                    value={status}
                    handleChange={handlePredictionInput}
                    list={statusOptions}
                  />
                  {/* predictionType */}
                  <FormRowSelect
                    name="predictionType"
                    labelText="prediction type"
                    value={predictionType}
                    handleChange={handlePredictionInput}
                    list={predictionTypeOptions}
                  />
                  <div className="btn-container">
                    <button
                      type="button"
                      className="btn btn-block clear-btn"
                      onClick={() => dispatch(clearValues())}
                    >
                      clear
                    </button>
                    <button
                      type="submit"
                      className="btn btn-block submit-btn"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      predict
                    </button>
                  </div>
                </div>
              </form>
            </Wrapper>
          </div>
        </div>
      </main>
    </SharedWrapper>
  );
};

export default AddPrediction;
