import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Container>
      {children}
      <input {...rest} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.SECONDARY_400};

  > input {
    height: 56px;
    width: 100%;
    padding: 19px 24px;

    color: ${({ theme }) => theme.COLORS.SECONDARY_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.SECONDARY_400};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }

  > svg {
    margin-left: 16px;
    size: 24px;
  }
`;
