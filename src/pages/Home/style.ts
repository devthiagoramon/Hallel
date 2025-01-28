import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 2rem;
  width: 97vw;
  height: 100%;
`;

export const HomeWelcomeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeTextContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  row-gap: 1rem;
  max-width: 60%;
  .strong {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .description {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
