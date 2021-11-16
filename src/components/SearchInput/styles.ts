import styled from "styled-components";

export const SearchInputFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
  border-bottom: 1px solid red;
  box-sizing: border-box;
`;

export const SearchInputField = styled.input`
background-color: transparent;
border: none;
outline: none;


`;

export const SearchInputFieldIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;
