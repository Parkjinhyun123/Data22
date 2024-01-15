import KakaoLogin from "react-kakao-login";
import { styled } from "styled-components";
import KakaoLogo from "../../assets/kakao logo.png";

const SocialKakao = () => {
  const Rest_api_key = "dccfcf3a80c138c5fb9f44656f9b6bb6"; //REST API KEY
  const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const btn_wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;

  const KakaoBtn = styled.button`
    background-color: #f7e600;
    width: 100%;
    border: none;
    height: 50px;
    cursor: pointer;
  `;

  return (
    <>
      <btn_wrapper>
        <KakaoBtn onClick={handleLogin}>
          {" "}
          <img src={KakaoLogo} />
          Kakao로 로그인
        </KakaoBtn>
      </btn_wrapper>
    </>
  );
};

export default SocialKakao;
