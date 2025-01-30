import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 2rem;
  width: 97vw;
  height: 100%;
`;

export const WelcomeCardContainer = styled.div`
  position: relative;
  width: 93%;
  background-color: rgba(3, 49, 23, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  border-radius: 1rem;
  height: 300px;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1;
    row-gap: 1rem;
    width: 90%;
    height: 600px;
  }
`;

export const WelcomeCardTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const WelcomeCardBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;

  img {
    position: absolute;
    justify-self: flex-end;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    img {
      width: 100%;
      position: relative;
      right: 0;
    }
  }
`;

export const WelcomeCardTitle = styled.label`
  font-family: "Oswald", serif;
  color: #252525;
  font-weight: bold;
  font-size: 3rem;
  width: 100%;
`;

export const WelcomeCardDescription = styled.span`
  font-family: "Inter", serif;
  color: #252525;
  font-weight: 500;
  font-size: 1.75rem;
  width: 100%;
  margin-top: 1rem;
`;

export const EventCardContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  max-height: 400px;
  min-height: 400px;
  display: grid;
  align-items: center;
  column-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100%;
`;

export const SeeMoreEventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 0.5rem;

  .icon_button {
    padding: 1rem;
    border-radius: 100%;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.4);

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

  .text {
    font-size: 18px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
  }
`;
