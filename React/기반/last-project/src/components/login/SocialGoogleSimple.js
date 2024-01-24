import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../../assets/google logo_r.png";
import { styled } from "styled-components";

const NewBtn = styled.div`
  & > button {
    background-color: #fff;
    border: none;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 16px;
    opacity: 1;
    cursor: pointer;
  }
`;

function SocialGoogle() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
  });

  return (
    <NewBtn>
      {" "}
      <img
        src={GoogleLogo}
        alt="구글 로그인 로고"
        style={{ width: "25px" }}
        onClick={() => login()}
      />
    </NewBtn>
  );
}

export default SocialGoogle;
