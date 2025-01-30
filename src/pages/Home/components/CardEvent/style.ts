import styled from "styled-components";

export const CardEventContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  position: relative;
  border-radius: 1rem;

  img {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    display: -webkit-box; /* Necessário para o line-clamp funcionar */
    -webkit-box-orient: vertical; /* Define o comportamento do box */
    overflow: hidden; /* Garante que o texto extra será escondido */
    -webkit-line-clamp: 2; /* Limita a 3 linhas */
    position: absolute;
    font-size: 1.75rem;
    font-weight: bold;
    max-lines: 2;
    text-overflow: ellipsis;
    width: 80%;
    font-family: "Noto Sans", serif;
    bottom: 1rem;
    left: 1rem;
    text-shadow: rgba(0, 0, 0, 0.9) 0 0 10px;
    color: ${(props) => props.theme.mainColors.whiteText};
  }

  .floating_redirect_button {
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${(props) => props.theme.mainColors.background};
    top: 1rem;
    right: 1rem;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  .informative_chip {
    padding: 0.25rem 1rem;
    background-color: ${(props) => props.theme.mainColors.background};
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    color: ${(props) => props.theme.mainColors.text};
    top: 1.3rem;
    left: 1.5rem;
    .text {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
