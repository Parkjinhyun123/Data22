import { useEffect, useRef } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import NaverLogo from "../../assets/naver logo_r.png";
import { addDatas } from "../../api/firebase";

const NaverIdLogin = styled.div`
  display: none;
`;

function NaverSimple() {
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
      if (status) {
        setUser({ ...naverLogin.user });

        localStorage.setItem("user.name", naverLogin.user.name);
        localStorage.setItem("user.nickname", naverLogin.user.nickname);
        localStorage.setItem("user.email", naverLogin.user.email);

        window.open("http://localhost:3000", "_self");
        window.close();
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
        <img
          src={NaverLogo}
          alt="네이버 로그인 아이콘"
          onClick={handleNaverLogin}
          style={{ width: "25px" }}
        />
      </div>
    </div>
  );
}

export default NaverSimple;
