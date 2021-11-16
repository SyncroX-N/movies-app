import styled from "styled-components";
import ArrowIosIcon from "@mui/icons-material/ArrowBackIos";


export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding-left: 60px;
  transition: all 0.3s ease;
`;

export const SliderWrapper = styled.div`
position: relative;
`;
export const inputStyle = {
  fontFamily: 'Open Sans',
  fontSize: 18.9,
  color: 'white',
  borderBottomColor: 'white'
};
export const MoviesListContainer = styled.div`

`;
export const SearchContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 20px;
`;
export const TitleContainer = styled.div`
padding: 30px 60px;
`;
export const SearchBoxContainer = styled.div`
display:flex;
flex-wrap: wrap;
padding: 20px;
`;
export const MovieBox = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
`
export const Arrow = styled(ArrowIosIcon)`
&& {
width: 60px;
height: 100%;
position: absolute;
z-index: 99;
cursor: pointer;
background: rgba(20,20,20,.5);
}
`;

