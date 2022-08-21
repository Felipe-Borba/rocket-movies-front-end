import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;

  > svg {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
