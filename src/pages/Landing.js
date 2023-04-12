import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav></nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              loan approval <span>prediction</span>
            </h1>
            <p>
              LendWise is an AI-powered loan application approval prediction app
              that uses machine learning algorithms to assess credit risk,
              predict loan approval likelihood, and provide borrowers with
              insights to improve their chances. With a user-friendly interface,
              LendWise aims to provide a seamless experience for borrowers,
              while also minimizing risk and increasing efficiency for lenders.
            </p>
            <Link to="/predict" className="btn btn-hero">
              Predict
            </Link>
          </div>
          <img src={main} alt="loan prediction" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
