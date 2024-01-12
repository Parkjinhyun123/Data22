import { useState, useEffect } from "react";
import styled from "styled-components";
import SocialKakao from "./SocialKakao";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  background-color: #f8ebd8;
  margin: 0 auto;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };

  return (
    <Container>
      <div>
        <h2>Login</h2>
        <InputArea>
          <input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디"
          />
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호"
          />
        </InputArea>
        <LoginBtnWrapper>
          <button type="button" onClick={onClickLogin}>
            로그인
          </button>
          <SocialKakao></SocialKakao>
        </LoginBtnWrapper>
      </div>
    </Container>
  );
}

export default Login;
