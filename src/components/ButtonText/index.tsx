import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const ButtonText: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_400};
`;
