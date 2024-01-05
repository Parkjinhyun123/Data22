import styled from "styled-components";
import KakaoImg from "../assets/kakao.svg";
import LoginButton from "./LoginButton";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledButton = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }
`;

function KakaoButton() {
  return (
    <StyledButton>
      <Icon src={KakaoImg} alt="kakao icon" />
      카카오로그인
    </StyledButton>
  );
}

export default KakaoButton;
