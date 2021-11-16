import React, { InputHTMLAttributes } from "react";
import {
  SearchInputFieldContainer,
  SearchInputField,
  SearchInputFieldIcon,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  return (
    <SearchInputFieldContainer>
      <SearchInputField {...props} />
      <SearchInputFieldIcon>
        <SearchIcon />
      </SearchInputFieldIcon>
    </SearchInputFieldContainer>
  );
};

export default SearchInput;
