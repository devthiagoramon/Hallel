import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  background-color: transparent;
  padding: 1rem 2rem;

  .div-menu-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #033117;
    padding: 10px;
  }

  @media (max-width: 768px) {
    & {
      display: flex;
      padding: 1rem 2rem;
      width: 97%;
    }
  }

  @media (max-width: 425px) {
    & {
      width: 97%;
    }
  }
`;

export const HamburgerMobileHeader = styled.button`
  display: none;
  background-color: transparent;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 100%;

  .icon {
    width: 32px;
    height: 32px;
    color: #033117;
  }

  @media (max-width: 768px) {
    & {
      display: flex;
      padding: 1rem;
    }
  }
`;

export const ContainerModalMobileMenu = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  overflow-y: scroll;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.mainColors.background};
`;

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 768px) {
    & {
      width: 100%;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: auto;
      row-gap: 0.5rem;
    }
  }

  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #252525;
    border-radius: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 4px;
    background-color: #ffffff;
  }

  .button-cadastro {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #fafafa;
    background-color: #033117;
    border: solid 1px rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 4px;
    border-radius: 1rem;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color: #252525;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const ButtonTittle = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 0.5rem 1.75rem;
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
  display: flex;
  align-items: center;
  border-radius: 24px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 5%;
  height: 70px;
  object-fit: cover;

  @media (max-width: 768px) {
    & {
      width: 10%;
    }
  }

  @media (max-width: 425px) {
    & {
      width: 25%;
    }
  }
`;
