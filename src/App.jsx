import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/LoginPage";
import TwoStepverification from "./pages/TwoStepverification";
import Verificationcode from "./pages/Verificationcode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/twostepverification" element={<TwoStepverification/>}/>
        <Route path="verificationcode" element={< Verificationcode/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;