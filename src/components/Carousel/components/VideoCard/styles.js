import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  transition: opacity .3s;
  width: 298px;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;
