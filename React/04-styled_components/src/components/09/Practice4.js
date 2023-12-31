import { css } from "styled-components";
import Input from "./Input";
import SearchInput from "./SearchInput";

const INPUT = css`
  padding: 16px;
`;

function Practice4() {
  return (
    <div>
      <h2>Input</h2>
      <Input />
      <h2>Search Input</h2>
      <SearchInput></SearchInput>
    </div>
  );
}

export default Practice4;
