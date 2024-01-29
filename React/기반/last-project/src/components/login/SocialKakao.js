import KakaoLogin from "react-kakao-login";
import { styled } from "styled-components";
import KakaoLogo from "../../assets/kakao logo.png";
import { useEffect, useState } from "react";
import { addDatas } from "../../api/firebase";

const KakaoLoginBtn = styled.button`
  background-color: #f7e600;
  border: none;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
`;

const SocialKakao = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;
  const initKakao = async () => {
    const jsKey = "12960e8f1d627ea898d565f3b8ab8afb";
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
    }
  };
  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success: async (res) => {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success: async (res) => {
            console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            const data = {
              nickname: kakaoAccount.profile.nickname,
            };
            alert(`돌아오신 것을 환영합니다! ${data.nickname} 님`);
            try {
              await addDatas("socialmember", data);
            } catch (error) {
              console.log("Firebase 데이터 저장 에러:", error);
            }
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
          },
          fail: (error) => {
            console.log("카카오 인가 요청 실패:", error);
          },
        });
      },
      fail: (error) => {
        console.log("카카오 로그인 실패:", error);
      },
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    if (isLogin) {
      setUser({
        email: localStorage.getItem("email"),
        profileImg: localStorage.getItem("profileImg"),
        nickname: localStorage.getItem("nickname"),
      });
    }
  }, [isLogin]);

  return (
    <div className="App">
      <KakaoLoginBtn onClick={kakaoLogin}>
        {" "}
        <img src={KakaoLogo} alt="카카오 로그인 로고" />
        Kakao 로 로그인
        <div></div>
      </KakaoLoginBtn>
    </div>
  );
};

export default SocialKakao;
