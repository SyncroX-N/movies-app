import styled from "styled-components";
import FavoriteEmpty from '@mui/icons-material/FavoriteBorder';
import FavoriteFull from '@mui/icons-material/Favorite';

interface HeartProps {
  notFilled?: boolean;
}

export const HeartEmpty = styled(FavoriteEmpty) <HeartProps>`
position: absolute;
padding: 8px;
top: 0;
right: 0;
cursor: pointer;
`
export const HeartFull = styled(FavoriteFull) <HeartProps>`
position: absolute;
padding: 8px;
color: red;
top: 0;
right: 0;
cursor: pointer;
`
export const CardImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  height: 320px;
  width: 250px;
`;
export const ImageContainer = styled.div`
`;

export const MovieCardContainer = styled.div`
    margin-right: 8px;
    height: 360px;
    width: 250px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    border-radius: 4px;
    &:hover {
      transform: scale(1.2);
    }
`;


export const MovieInfoContainer = styled.div`
display: flex;
justify-content: center;
`;


