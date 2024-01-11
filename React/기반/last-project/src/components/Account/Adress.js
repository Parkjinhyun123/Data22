import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";
import { useEffect } from "react";
function Adress() {
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [detailAddress, setDetailAddress] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const searchAddress = location.state;
  const postcode = searchAddress?.postcode;
  const address = searchAddress?.address;

  const Container = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
  `;

  const AdressWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const PostCodeAndButton = styled.div`
    display: flex;
  `;

  const Input = styled.input`
    width: 70%;
    padding: 8px;
    margin: 4px;
    /* border-radius: 8px; */
    /* border: 50%; */
    outline: none;
    border-color: #d9d9d9;
  `;

  const InputButton = styled.input`
    width: 20%;
    border: none;
    cursor: pointer;
    background-color: #1c1b1f;
    color: #fff;
  `;

  const handleSearch = () => {
    navigate("/search");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/succeed");
  };

  useEffect(() => {
    if (postcode && address && detailAddress) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [postcode, address, detailAddress]);

  useEffect(() => {
    const authorizeCodeFromKakao = window.location.search.split("=")[1];
    if (authorizeCodeFromKakao !== undefined) {
      console.log(`authorizeCodeFromKakao : ${authorizeCodeFromKakao}`);
    } else {
      console.log("No AuthorizeCodeFromKakao");
    }
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <AdressWrapper>
            <PostCodeAndButton>
              <Input
                m="3px"
                size="md"
                type="text"
                placeholder="우편번호"
                value={postcode}
                readOnly
              />
              <InputButton
                m="3px"
                size="md"
                type="button"
                onClick={handleSearch}
                value="주소검색"
              />
            </PostCodeAndButton>
            <Input
              m="3px"
              size="md"
              type="text"
              placeholder="주소"
              value={address}
              readOnly
            />
            <Input
              m="3px"
              size="md"
              type="text"
              placeholder="상세주소"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </AdressWrapper>
        </form>
      </Container>
    </>
  );
}

export default Adress;
