import styled from "styled-components";

interface ButtonProps {
  alt: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, alt }) => !alt ? theme.COLORS.PRIMARY_400 : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, alt }) => !alt ? theme.COLORS.BACKGROUND_800 : theme.COLORS.PRIMARY_400};
  font-weight: 500;

  > svg {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
