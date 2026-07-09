import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components-LandingPage/LandingPage";
import LoginPage from "./Components-Login/LoginPage";
import TwoStepverification from "./Components-Login/TwoStepverification";
import Verificationcode from "./Components-Login/Verificationcode";
import ForgotPassword from "./Components-Login/ForgotPassword";
import ForgotPasswordOtp from "./Components-Login/FrogotPasswordOtp";
import ResetPassword from "./Components-Login/ResetPassword";
import ResetPasswordSuccess from "./Components-Login/ResetPasswordSuccess";


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
        <Route path="ResetPassword" element={<ResetPassword/>}/>
        <Route path="ResetPasswordSuccess" element={<ResetPasswordSuccess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;