import Input from "./Input";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  ${Input} {
    width: 100%;
    display: block;
    margin: 8px 0 16px;
    box-sizing: border-box;
  }
`;

function Practice2() {
  return (
    <Container>
      <h1>로그인</h1>
      <label htmlFor="email">Email</label>
      <Input type="email" placeholder="styled@DW.kr" id="email"></Input>
      <label htmlFor="password">Password</label>
      <Input type="password" placeholder="비밀번호" id="password"></Input>
    </Container>
  );
}

export default Practice2;
