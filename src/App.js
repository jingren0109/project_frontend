import { Landing, Error, AddPrediction } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="predict" element={<AddPrediction />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </HashRouter>
  );
}

export default App;
