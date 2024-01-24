import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/adress/Search";
import App from "./components/App";
import LoginPage from "./components/login/LoginPage";
import FindId from "./components/login/FindId";
import FindPass from "./components/login/FindPass";
import ChoiceAccount from "./components/Account/ChoiceAccount";
import SignUp from "./components/Account/SignUp";
import SignUpHos from "./components/Account/SignUpHos";
import SignUpPh from "./components/Account/SignUpPh";
import Terms from "./components/Account/Terms";
import TermsHos from "./components/Account/TermsHos";
import OwnerJoinComplete from "./components/Account/OwnerJoinComplete";
import PartnerJoinComplete from "./components/Account/PartnerJoinComplete";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPass" element={<FindPass />} />
        <Route path="/Account/ChoiceAccount" element={<ChoiceAccount />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TermsHos" element={<TermsHos />} />
        <Route path="/SignUpHos" element={<SignUpHos />} />
        <Route path="/SignUpPh" element={<SignUpPh />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/OwnerJoinComplete" element={<OwnerJoinComplete />} />
        <Route path="/PartnerJoinComplete" element={<PartnerJoinComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
