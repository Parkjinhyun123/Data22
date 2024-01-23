import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/adress/Search";
import App from "./components/App";
import LoginPage from "./components/login/LoginPage";
import FindId from "./components/login/FindId";
import FindPass from "./components/login/FindPass";
import ChoiceAccount from "./components/Account/ChoiceAccount";
import SignUp from "./components/Account/SignUp";
import SignUpHos from "./components/Account/SignUpHos";
import Terms from "./components/Account/Terms";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPass" element={<FindPass />} />
        <Route path="/Account/ChoiceAccount" element={<ChoiceAccount />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpHos" element={<SignUpHos />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
