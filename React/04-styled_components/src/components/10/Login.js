import styled, { css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import Link from "./Link";
import Label from "./Label";
import KakaoButton from "./KakaoButton";
const txtCenter = css`
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 40px;
  font-family: Pretendard;
  background: #121fcf;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color: transparent;
  ${txtCenter}
`;
const Description = styled.div`
  color: #848187;
  ${txtCenter};
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }
  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입하기</Link>
      </Description>
      <form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" placeholder="styled@DW.kr" id="email"></Input>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" placeholder="비밀번호" id="password"></Input>
        <Button>로그인 하기</Button>
      </form>
      <KakaoButton></KakaoButton>
    </Container>
  );
}

export default Login;
