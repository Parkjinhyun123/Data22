import { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import NaverLogo from "../../assets/naver logo.png";
import { addDatas } from "../../api/firebase";

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #06bd34;
  border: none;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
`;

function Naver() {
  const [user, setUser] = useState(null);

  const naverRef = useRef();
  const { naver } = window;

  const naverLogin = new naver.LoginWithNaverId({
    clientId: "Dt3h07_52mnBoskaynlU",
    callbackUrl: "http://localhost:3000",
    isPopup: true,
    loginButton: {
      color: "green",
      type: 1,
      height: 50,
    },
  });

  const getUser = async () => {
    await naverLogin.getLoginStatus((status) => {
      console.log(status);
      if (status) {
        setUser({ ...naverLogin.user });

        console.log(user);
        localStorage.setItem("user.name", naverLogin.user.name);
        localStorage.setItem("user.nickname", naverLogin.user.nickname);
        localStorage.setItem("user.email", naverLogin.user.email);
      }
    });
  };

  const naverUser = {
    name: localStorage.getItem("user.name"),
    nickname: localStorage.getItem("user.nickname"),
    email: localStorage.getItem("user.email"),
  };

  const collectionName = "socialmember";

  if (naverUser.name && naverUser.nickname && naverUser.email) {
    addDatas(collectionName, naverUser)
      .then(() => {
        console.log("User 데이터가 성공적으로 추가되었습니다.");
      })
      .catch((error) => {
        console.error("User 데이터 추가 중 오류가 발생하였습니다:", error);
      });
  }

  useEffect(() => {
    naverLogin.init();
    getUser();
  }, []);

  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };

  return (
    <div>
      <div>
        <NaverIdLogin ref={naverRef} id="naverIdLogin" />
        <NaverLoginBtn>
          <img
            src={NaverLogo}
            alt="네이버 로그인 아이콘"
            onClick={handleNaverLogin}
          />
          Naver 로 로그인
          <div></div>
        </NaverLoginBtn>
      </div>
    </div>
  );
}

export default Naver;
