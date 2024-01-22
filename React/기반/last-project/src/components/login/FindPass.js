import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { changeMemberPass, findId, findPass } from "../../api/firebase";
import Modal from "../Account/ModalPass";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 16px;
  flex-direction: column;
  background-color: #f8ebd8;
  margin: 0 auto;
  box-sizing: border-box;
`;

function FindPass() {
  const [mail2, setMail2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [values, setValues] = useState({
    id: "",
    password: "",
  });
  const [idFound, setIdFound] = useState(false);
  const email2Ref = useRef(null);
  const phoneRef = useRef();
  const [memberName, setMemberName] = useState("");
  const [memberPassModalOpen, setMemberPassModalOpen] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [isError, setIsError] = useState(false);
  const [id, setId] = useState("");

  const handleMailChange = (e) => {
    const selectedValue = e.target.value;

    setMail2(selectedValue);

    const self = email2Ref.current;

    if (selectedValue === "other") {
      if (self) {
        self.disabled = false;
        self.value = "";
      }
    } else {
      if (self) {
        self.value = e.target.value;
        self.disabled = true;
      }
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };

  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result = "";
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
        case 7:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }

    phoneRef.current.value = result;

    setPhone(e.target.value);
  };
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
  };

  const handleChangePass = async () => {
    if (
      id &&
      memberName &&
      email &&
      (mail2 === "other" ? email2Ref.current.value : mail2) &&
      phone
    ) {
      try {
        const memberId = await findPass(
          id,
          memberName,
          email,
          mail2 === "other" ? email2Ref.current.value : mail2,
          phone
        );
        if (memberId === "일치하는 회원 정보가 없습니다.") {
          setIsError(true);
          setMemberId("");
          setMemberPassModalOpen(false);
        } else {
          setIsError(false);
          setMemberId(memberId);
          setMemberPassModalOpen(true);
          console.log("memberId:", memberId);
        }
      } catch (error) {
        console.error("회원 PASS 찾기 오류:", error);
        setMemberPassModalOpen(false);
      }
    } else {
      alert("모든 값을 입력해주세요.");
      setMemberPassModalOpen(false);
    }
  };

  const closeModal = () => {
    setMemberPassModalOpen(false);
  };

  return (
    <Container>
      <div>
        <h2 style={{ margin: "30px" }}>Forgot your PW?</h2>
        <p>회원 가입 시 입력한 정보를 입력해주세요.</p>
      </div>
      <div>
        <table className="join-area">
          <colgroup>
            <col data-member-form="th" style={{ width: "20%" }} />
            <col data-member-form="td" style={{ width: "80%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                <div className="form-el">
                  <label htmlFor="id">아이디</label>
                </div>
              </th>
              <td>
                <input id="id" name="id" value={id} onChange={onChangeId} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="name">이름</label>
              </th>
              <td>
                <input
                  type="text"
                  id="name"
                  title="이름"
                  className="required"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">이메일</label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  id="email"
                  title="이메일아이디 "
                  onChange={onChangeEmail}
                />
                @
                <input
                  type="text"
                  name="email2"
                  id="email2"
                  title="이메일 주소 직접입력"
                  disabled={mail2 !== "other"}
                  ref={email2Ref}
                />
                <select
                  name="tmp_mail"
                  id="tmp_mail"
                  onChange={handleMailChange}
                >
                  <option value="choice">선택하세요</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="other">직접입력</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label htmlFor="phone">연락처</label>
              </th>
              <td>
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  ref={phoneRef}
                  onChange={handlePhone}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        open={memberPassModalOpen}
        onClose={closeModal}
        isError={isError}
        memberId={memberId}
      />
      <button onClick={handleChangePass}>비밀번호 변경하기</button>
    </Container>
  );
}

export default FindPass;
