import styled from "styled-components";


export const CardImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const FavouriteMoviesContainer = styled.div`
    margin-right: 8px;
    transition: all .2s ease-in-out;
    border-radius: 4px;
    &:hover {
      transform: scale(1.5);
    }
`;


