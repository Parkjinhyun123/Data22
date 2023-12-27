import Input from "./Input";
import Div from "./Div";

function Practice2() {
  return (
    <Div>
      <h1>로그인</h1>
      <label htmlFor="email">email</label>
      <Input type="email" placeholder="styled@DW.kr" id="email"></Input>
      <label htmlFor="password">Password</label>
      <Input type="password" placeholder="비밀번호" id="password"></Input>
    </Div>
  );
}

export default Practice2;
