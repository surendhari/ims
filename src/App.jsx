import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/LoginPage";
import TwoStepverification from "./pages/TwoStepverification";
import Verificationcode from "./pages/Verificationcode";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordOtp from "./pages/FrogotPasswordOtp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/twostepverification" element={<TwoStepverification/>}/>
        <Route path="verificationcode" element={< Verificationcode/>}/>
        <Route path="ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="ForgotPasswordOtp" element={<ForgotPasswordOtp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;