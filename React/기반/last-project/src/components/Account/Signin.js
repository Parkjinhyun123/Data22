import styled from "styled-components"
import Adress from "./Adress"
import IdCheck from "./IdCheck"
import TH from "./Table"
import Password from "./Password"

function Signin(){

  const SignContainer= styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
  `

  const TD = styled.td`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border: 1px solid black;
`


      return(
        <>
        <SignContainer>
        <div className="member-area">
        <div className="member-top">
          <h2>회원가입</h2>
          <p>회원가입 정보를 입력해주세요.</p>
        </div>
        <table className="join-area">
        <thead>
          <colgroup>
            <col width="30%"/>
            <col width="70%"/>
          </colgroup>
        </thead>
          <tbody>
            <IdCheck/>
            <Password/>
            <tr>
              <TH scope="row">
                <span className="marking">*</span>
                <label for="name">이름</label>
              </TH>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  title="이름"
                  className="required"
                />
              </td>
              </tr>
              <tr>
              <TH scope="row">
                <span className="marking">*</span>
                <label for="name">닉네임</label>
              </TH>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  title="닉네임"
                  className="required"
                />
              </td>
              </tr>
            
            <tr>
              <TH>
                <span className="marking">*</span>
                <label for="email">이메일</label>
              </TH>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  title="이메일아이디 "
                />
                @
                <input
                  type="text"
                  name="email2"
                  id="email2"
                  title="이메일 주소 직접입력"
                  disabled
                />
                <select name="tmp_mail" id="tmp_mail">
                  <option value="">선택하세요</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="other">직접입력</option>
                </select>
              </td>
            </tr>
            <tr>
              <TH scope="row">
                <label for="gender">성별</label>
              </TH>
              <td>
                <input type="radio" name="gender" id="genderM" checked />
                <label for="genderM">남성</label>

                <input type="radio" name="gender" id="genderF" />
                <label for="genderF">여성</label>
              </td>
            </tr>
            <tr>
              <TH scope="row">
                <span className="marking">*</span>
                <label for="phone1">연락처</label>
              </TH>
              <td>
                <div className="wrapper_middle">
                  <input
                  className="input"
                    id="phoneNumber"
                    type="tel"
                    placeholder="연락처"
                    oninput="autoHyphen(this)"
                  />
                  <button class="get_number" onclick="takeTarget()">
                    인증번호 받기
                  </button>
                </div>
                <div className="wrapper_bottom">
                  <input
                  className="input_target"
                    type="text"
                    maxlength="6"
                    placeholder="인증번호"
                  />
                  <span className="target_time">
                    <span id="remaining_min">3</span> :
                    <span id="remaining_sec">00</span>
                  </span>
                  <button className="complete_target" id="complete">
                    인증완료
                  </button>
                </div>
                <em>해당 연락처는 아이디 비밀번호 찾기시 이용합니다.</em>
              </td>
            </tr>
            <tr>
            <TH scope="row">
                <label for="address">주소</label>
              </TH>
              <Adress/>
            </tr>
          </tbody>
        </table>
        </div>
        </SignContainer>
        </>
      )
}

export default Signin