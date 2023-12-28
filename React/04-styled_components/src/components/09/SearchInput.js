import styled, { css } from "styled-components";
import searchImg from "./search.png";
import Input from "./Input";

const SearchInput = styled(Input)`
  background-image: url("${searchImg}");
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 5%;
  padding-left: 32px;

  &:focus {
    border-color: #7760b4;
  }
`;

export default SearchInput;
