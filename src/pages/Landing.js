import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
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
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
