import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SingUp from "./Account/SignUp";
import SingUpHos from "./Account/SignUpHos";
import SingUpPh from "./Account/SignUpPh";
import Map from "./map/Map";
import Terms from "./Account/Terms";
import LoginPage from "./login/LoginPage";
import OwnerJoinComplete from "./Account/OwnerJoinComplete";
import FindId from "./login/FindId";
import FindPass from "./login/FindPass";

function App() {
  return (
    <>
      {/* <SingUp></SingUp> */}
      {/* <SingUpHos></SingUpHos> */}
      {/* <SingUpPh></SingUpPh> */}
      {/* <Map></Map> */}
      {/* <Terms></Terms> */}
      {/* <LoginPage></LoginPage> */}
      {/* <FindId></FindId> */}
      <FindPass></FindPass>
      {/* <OwnerJoinComplete></OwnerJoinComplete> */}
    </>
  );
}

export default App;
