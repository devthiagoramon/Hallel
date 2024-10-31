import styled from "styled-components";

export const ModalSelecionarMinisterioContainer = styled.body`
  margin-top: 1rem;
  height: 100%;
  width: 100%;
`;

export const ModalSelecionarMinisterioLoadingContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  row-gap: 8px;
`;

export const ModalSelecionarMinisterioLoadingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
`;

export const ModalSelecionarMinisterioListContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  margin-top: 0.5rem;
  row-gap: 0.5rem;
`;

export const ModalSelecionarMinisterioItem = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
  .image {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.mainColors.text};
  }
`;
