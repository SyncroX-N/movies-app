import styled from "styled-components";

interface TitleProps {
  fontSize: number;
  bold?: boolean;
  light?: boolean;
  align: string;
}

export const TitleContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleText = styled.p<TitleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: sans-serif;
  color: #e5e5e5;
  ${({ bold, light }) =>
    bold
      ? "font-weight: bold"
      : light
        ? "font-weight: 300"
        : "font-weight: 400"};
`;
