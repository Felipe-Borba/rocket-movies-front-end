import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
