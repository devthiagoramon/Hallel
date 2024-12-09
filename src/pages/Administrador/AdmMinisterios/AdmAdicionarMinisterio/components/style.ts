import styled from "styled-components";

export const SupportAdmMinisterioContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  margin: 0.5rem 0 0.5rem 0;
`;

export const SupportAdmMinisterioLabel = styled.label`
  font-size: 22px;
  color: ${(props) => props.theme.mainColors.text};
  font-weight: 500;
`;

export const SupportAdmMinisterioSubtitle = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.mainColors.text};
  font-weight: 400;
  text-align: justify;
`;
