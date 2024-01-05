import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ $error }) => ($error ? "red" : "#eee")};
  padding: 8px 0;
  outline: none;
  width: 100%;
  font-size: 16px;
  display: block
    ${({ $error }) =>
      !$error &&
      `&:focus{
        border-bottom: 2px solid #7760b4
    }`};

  &::placeholder {
    color: #c4c5cd;
  }
`;
export default Input;
