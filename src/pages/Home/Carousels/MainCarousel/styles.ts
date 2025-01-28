import styled from "styled-components";

export const ContainerCarousel = styled.section<{
  $background_image: string;
}>`
  width: 100%;
  height: auto;
  flex-direction: row;
  align-self: center;
  justify-self: center;
  background: 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 1400px) {
    height: 400px;
  }

  @media screen and (max-width: 1200px) {
    height: 350px;
  }

  &:hover {
    cursor: grab;
  }
`;
