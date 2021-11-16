import React from "react";

import { TitleText, TitleContainer } from "./styles";

export interface TextProps {
  fontSize: number;
  bold?: boolean;
  light?: boolean;
  align?: string;
}

const Text: React.FunctionComponent<TextProps> = ({
  align = "left",
  bold,
  children,
  fontSize,
  light,
}) => {
  return (
    <TitleContainer>
      <TitleText align={align} bold={bold} fontSize={fontSize} light={light}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
