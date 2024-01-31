import styled from "styled-components";
import MainCarousel from "../components/MainCarousel";
import { Link } from "react-router-dom";
import BtnBorder from "../assets/button round_1.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: #f8ebd8;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  box-sizing: border-box;
`;

const StyleLink = styled(Link)`
  background-image: url("../assets/button round_1.png");
  background-size: cover;
  background-position: center;
`;

const LinkImg = styled.div`
  background-image: url("../assets/button round_1.png");
  background-size: cover;
  background-position: center;
`;

function MainPage() {
  return (
    <Container>
      <MainCarousel />
      <p style={{ textAlign: "center" }}>
        진료비 DB 기반 조회, 질병검색, 동물병원약국 추천 및 예약서비스를
        제공하여
        <br />
        보다 편리하고 이로운 펫 라이프를 만족할 수 있습니다.
      </p>
      <StyleLink to="/about">
        <LinkImg>
          <span>More</span>
        </LinkImg>
      </StyleLink>
    </Container>
  );
}
export default MainPage;
