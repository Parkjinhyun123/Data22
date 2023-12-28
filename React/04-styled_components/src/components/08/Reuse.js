import styled, { css } from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const fontSize = css`
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
`;

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)};
  /* font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px; */
  ${fontSize}
`;

const Input = styled.input`
  border: 2px solid #eee;
  padding: 16px;
  border-radius: 4px;
  outline: none;
  /* font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px; */
  ${fontSize}
`;

const Container = styled.div`
  ${Button}, ${Input} {
    margin: 10px;
  }
`;

function Reuse() {
  return (
    <div>
      <Container>
        <h2>Button</h2>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
        <h2>input</h2>
        <Input size="small" />
        <Input size="medium" />
        <Input size="large" />
      </Container>
    </div>
  );
}

export default Reuse;
