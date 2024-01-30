import React, { useEffect, useState } from "react";
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
import Spinner from "./components/Spinner";
import clickImg from "./assets/버튼.png";

function Main() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const closeModal = () => {
    setShowSpinner(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    setImagePosition({ x: event.clientX, y: event.clientY });
    setShowImage(true);

    // 타이머를 저장하는 상태를 추가합니다.
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    // 컴포넌트가 언마운트될 때 타이머를 취소합니다.
    return () => clearTimeout(timer);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<LoginPage />} />
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
          <Route
            path="/PartnerJoinComplete"
            element={<PartnerJoinComplete />}
          />
        </Route>
      </Routes>
      {showSpinner && (
        <div>
          <Spinner closeModal={closeModal} />
        </div>
      )}
      <div
        onClick={handleClick}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {showImage && (
          <img
            id="follow-image"
            src={clickImg}
            alt="이미지"
            style={{
              position: "absolute",
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
              visibility: showImage ? "visible" : "hidden",
              zIndex: 9999,
            }}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default Main;
