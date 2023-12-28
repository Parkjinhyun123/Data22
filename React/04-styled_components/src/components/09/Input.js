import styled from "styled-components";

const WIDTH = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  margin: 10px;
  border: 2px solid ${({ $error }) => ($error ? "red" : "#eee")};
  padding: 16px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `4px`)};
  outline: none;
  font-size: ${({ size }) => WIDTH[size] ?? WIDTH["medium"]}px;
  ${({ $error }) =>
    !$error &&
    `&:focus{
        border-color: #7760b4
    }`}
`;
export default Input;
