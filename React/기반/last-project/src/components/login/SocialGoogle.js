import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../../assets/google logo.png";
import { styled } from "styled-components";
import { addDatas } from "../../api/firebase";

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
  const clientId =
    "41843789723-0iutpsu7570l8m4kk6lfusurgvk5qt28.apps.googleusercontent.com";

  const login = useGoogleLogin({
    clientId: clientId,
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse); // tokenResponse 객체 출력
      const accessToken = tokenResponse.access_token;
      console.log(accessToken); // accessToken 값 출력
      if (accessToken) {
        fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then(async (data) => {
            // async 키워드 추가
            const email = (data && data.email) || "";
            const name = (data && data.name) || "";
            const profilePicture = (data && data.picture) || "";
            console.log(`이메일: ${email}`);
            console.log(`이름: ${name}`);
            console.log(`프로필 사진: ${profilePicture}`);

            // 여기서 addDatas 함수를 호출하여 name과 email 값을 socialmember 컬렉션에 추가
            await addDatas("socialmember", { email, name }); // await 키워드 추가
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    onFailure: (error) => {
      console.error(error); // 로그인 실패 시 에러 출력
    },
  });

  const handleLoginClick = () => {
    login();
  };

  return (
    <NewBtn>
      <button onClick={handleLoginClick}>
        <img
          src={GoogleLogo}
          alt="구글 로그인 로고"
          style={{ width: "30px" }}
        />
        Google 로 로그인
        <div></div>
      </button>
    </NewBtn>
  );
}

export default SocialGoogle;
