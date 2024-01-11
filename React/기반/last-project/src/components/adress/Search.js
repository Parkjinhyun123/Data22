import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAddress } from './../../utills/getAddress';

const Search = () => {
  const navigate = useNavigate();

  const handleComplete = (data) => {
    const address = getAddress(data);
    navigate("/", {
      state: {
        postcode: data.zonecode,
        address: address,
      },
    });
  };

  const handleClose = ()=>{
    navigate(-1)
  }

  const Container = styled.div`
    height: 500px;
    text-align: center;
  `;
  return (
    <Container>
      <p fontSize="3xl">주소 찾기</p>
      <DaumPostcode onComplete={handleComplete} />

      <button onClick={handleClose}>닫기</button>
    </Container>
  );
};


export default Search;